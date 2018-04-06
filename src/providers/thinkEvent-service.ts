import { Http, Headers, RequestOptions } from '@angular/http';

import { Injectable } from '@angular/core';

import { DbProvider } from './db-provider';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

import { UserOptions } from '../interfaces/user-options';

@Injectable()
export class ThinkEventService {
  baseApiUrl: string = "https://api-thinkevent.azurewebsites.net/api/";

  headers: Headers;
  options: RequestOptions;

  constructor(private http: Http,
    private dbProvider: DbProvider) {

  }

  getVersion(options: RequestOptions) {
    return new Promise((resolve: any) => {
      this.http.get(this.baseApiUrl + "services/app/Schedule/GetVersion", options).subscribe((response: any) => {
        resolve(response.json().result);
      })
    });
  }

  getToken(force?: boolean) {
    return new Promise((resolve: any, reject: any) => {
      if (!force){
        this.dbProvider.get("token").then((token: string) => {
          if (token.length > 0)
            resolve(token);
        })
      }

      this.http.post(this.baseApiUrl + "TokenAuth/Authenticate", {
        userNameOrEmailAddress: "geeketec",
        password: "G33ker123"
      })
        .map(res => res.json())
        ._catch(error => reject(error.json()))
        .subscribe((res: any) => {
          this.dbProvider.set("token", res.result.accessToken || "");
          resolve(res.result.accessToken || "");
        });
    });
  }

  login(user: UserOptions) {
    return new Promise((resolve: any, reject: any) => {
      this.http.post(this.baseApiUrl + "TokenAuth/Authenticate", {
        userNameOrEmailAddress: user.userName,
        password: user.password
      })
        .map(res => res.json())
        ._catch(error => reject(error.json()))
        .subscribe((res: any) => {
          this.dbProvider.set("token", res.result.accessToken || "");
          resolve(res.result.accessToken || "");
        });
    });
  }

  userCreate(user: any) {
    return new Promise((resolve: any, reject: any) => {
      this.headers = new Headers({
        'Authorization': 'Bearer ' + user.token
      });

      this.options = new RequestOptions({ headers: this.headers });

      this.http.post(this.baseApiUrl + "services/app/User/Create", {
        "userName": user.userName,
        "name": user.name,
        "surname": user.surname,
        "emailAddress": user.emailAddress,
        "isActive": true,
        "roleNames": [
          "User"
        ],
        "password": user.password
      }, this.options)
        .map(res => res.json())
        ._catch(error => reject(error.json()))
        .subscribe((res: any) => {
          resolve(res.data);
        });
    })
  }
}