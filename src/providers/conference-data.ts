import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';

import { UserData } from './user-data';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { ThinkEventService } from './thinkEvent-service';

@Injectable()
export class ConferenceData {
  baseApiUrl: string = "https://api-thinkevent.azurewebsites.net/api/";
  data: any;

  constructor(public http: Http, public user: UserData, private thinkEventService: ThinkEventService) {

  }

  load(force?: boolean): any {
    return new Promise((resolve: any) => {
      if (this.data) {
        resolve(this.data);
      } else {
        this.thinkEventService.getToken(force).then((token: string) => {
          let headers = new Headers({
            'Authorization': 'Bearer ' + token
          });

          let options = new RequestOptions({ headers: headers });

          this.http.get(this.baseApiUrl + 'services/app/Schedule/GetListAsync', options)
            .map(this.processData, this)
            .subscribe((data: any) => {
              resolve(data);
            })
        });
      }
    });
  }

  loadFeed(): any {
    if (this.data.speakers) {
      return Observable.of(this.data);
    } else {
      return this.http.get('assets/data/data-api-feed.json')
        .map(this.processFeed, this);
    }
  }

  loadMap(): any {
    if (this.data.map) {
      return Observable.of(this.data);
    } else {
      return this.http.get('assets/data/data-api-map.json')
        .map(this.processMap, this);
    }
  }

  processMap(data: any) {
    this.data.map = data.json().result["map"];

    return this.data;
  }

  processFeed(data: any) {
    this.data.speakers = data.json().result["speakers"];

    return this.data;
  }

  processData(data: any) {
    // just some good 'ol JS fun with objects and arrays
    // build up the data by linking speakers to sessions
    this.data = data.json().result;

    this.data.tracks = [];

    // loop through each day in the schedule
    this.data.items.forEach((day: any) => {
      // loop through each timeline group in the day
      day.groups.forEach((group: any) => {
        // loop through each session in the timeline group
        group.sessions.forEach((session: any) => {
          session.speakers = [];
          if (session.speakerNames) {
            session.speakerNames.forEach((speakerName: any) => {
              let speaker = this.data.speakers.find((s: any) => s.name === speakerName);
              if (speaker) {
                session.speakers.push(speaker);
                speaker.sessions = speaker.sessions || [];
                speaker.sessions.push(session);
              }
            });
          }

          if (session.tracks) {
            session.tracks.forEach((track: any) => {
              if (this.data.tracks.indexOf(track) < 0) {
                this.data.tracks.push(track);
              }
            });
          }
        });
      });
    });

    return this.data;
  }

  getTimeline(dayIndex: number, queryText = '', excludeTracks: any[] = [], segment = 'all') {
    return new Promise((resolve: any) => {
      this.load().then((data: any) => {
        resolve(this.getDay(data, dayIndex, queryText, excludeTracks, segment));
      }).catch(() => {
        this.load(true).then((data: any) => {
          resolve(this.getDay(data, dayIndex, queryText, excludeTracks, segment));
        });
      });
    });
  }

  getDay(data: any, dayIndex: number, queryText = '', excludeTracks: any[] = [], segment = 'all'): any {
    let day = data.items[dayIndex];
    day.shownSessions = 0;

    queryText = queryText.toLowerCase().replace(/,|\.|-/g, ' ');
    let queryWords = queryText.split(' ').filter(w => !!w.trim().length);

    day.groups.forEach((group: any) => {
      group.hide = true;

      group.sessions.forEach((session: any) => {
        // check if this session should show or not
        this.filterSession(session, queryWords, excludeTracks, segment);

        if (!session.hide) {
          // if this session is not hidden then this group should show
          group.hide = false;
          day.shownSessions++;
        }
      });
    });

    return day;
  }

  filterSession(session: any, queryWords: string[], excludeTracks: any[], segment: string) {

    let matchesQueryText = false;
    if (queryWords.length) {
      // of any query word is in the session name than it passes the query test
      queryWords.forEach((queryWord: string) => {
        if (session.name.toLowerCase().indexOf(queryWord) > -1) {
          matchesQueryText = true;
        }
      });
    } else {
      // if there are no query words then this session passes the query test
      matchesQueryText = true;
    }

    // if any of the sessions tracks are not in the
    // exclude tracks then this session passes the track test
    let matchesTracks = false;
    session.tracks.forEach((trackName: string) => {
      if (excludeTracks.indexOf(trackName) === -1) {
        matchesTracks = true;
      }
    });

    // if the segement is 'favorites', but session is not a user favorite
    // then this session does not pass the segment test
    let matchesSegment = false;
    if (segment === 'favorites') {
      if (this.user.hasFavorite(session.name)) {
        matchesSegment = true;
      }
    } else {
      matchesSegment = true;
    }

    // all tests must be true if it should not be hidden
    session.hide = !(matchesQueryText && matchesTracks && matchesSegment);
  }

  getSpeakers() {
    return this.loadFeed().map((data: any) => {
      return data.speakers.sort((a: any, b: any) => {
        let aName = a.name.split(' ').pop();
        let bName = b.name.split(' ').pop();
        return aName.localeCompare(bName);
      });
    });
  }

  getTracks() {
    return this.load().then((data: any) => {
      return data.tracks.map(prop => prop.title).sort();
    });
  }

  getMap() {
    return this.loadMap().map((data: any) => {
      return data.map;
    });
  }

}
