import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import {Injectable} from 'angular2/core';
import {User} from './user';
import {Observable} from 'rxjs/Observable';

@Injectable()

export class UserService{
    private _url = 'https://api.github.com/users/';

    constructor(private _http:Http){

    }

    getUser(userId):  Observable<User>{
        return this._http.get(this._url+userId)
                         .map(res=>res.json())
    }

    getFollowers(userId): Observable<User[]>{
        return this._http.get(this._url+userId+'/followers')
                         .map(res=>res.json())
    }

}