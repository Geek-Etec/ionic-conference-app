import {IonicView, NavController, IonicApp} from 'ionic/ionic';
import {DataService} from '../service/data';
import {Http, HTTP_BINDINGS} from "angular2/http";
import {DateFormat} from '../components/date-format';

@IonicView({
  templateUrl: 'app/speakers/speakers.html',
  bindings: [DataService, Http],
  viewBindings: [HTTP_BINDINGS],
  directives: [DateFormat]
})

export class SpeakersPage {
  constructor(nav: NavController, app: IonicApp, data: DataService) {
    this.speakers = null;
    this.scheduleInfo = null;
    this.dataService = data;
  }

  onInit() {
    this.scheduleInfo = this.dataService.getSchedule();
    let speakerList = this.speakers = this.dataService.getSpeakers();
    let talks = [];
    let speakers = [];
    this.scheduleInfo.map(function(dayItem) {
      dayItem.sessions.map(function(sessionItem) {
        sessionItem.talks.map(function(talkItem) {
          talks.push(talkItem.name);
          if (talkItem.speaker) {
            let speakerSession = speakerList.find(x => x.name == talkItem.speaker);
            if (speakerSession) {
              speakerSession.sessions = speakerSession.sessions || [];
              speakerSession.sessions.push(talkItem);
            }
            if (speakers.indexOf(talkItem.speaker) == -1) {
              speakers.push(talkItem.speaker);          
            }

        });
      });
    });
    this.talks = talks;
    this.speakersNames = speakers;
    // this.speakers = speakers;
    // this.talks = this.sessions.map(function(dayItem) {
    //   return dayItem.talks;
    // });

    //days have sessions
    //sessions have talks
    //talks have names

    console.log('all talks', this.talks);
    console.log('all speakers', speakers);
  }
}