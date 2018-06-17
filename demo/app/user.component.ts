import {Component} from 'angular2/core';
import {User} from './user';
import {UserService} from './user.service';
import {HTTP_PROVIDERS} from 'angular2/http'
import {Input} from 'angular2/core'
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/map'
import {OnInit} from 'angular2/core';

@Component({
    selector: 'user',
    templateUrl: 'app/user.template.html',
    providers: [UserService,HTTP_PROVIDERS]
})

export class UserComponent implements OnInit{
    @Input() userId;
    user: User;
    followers: User[];

    constructor(private _userService: UserService){
    }

    ngOnInit(){

        var userStream = this._userService.getUser(this.userId)                           
        var followersStream = this._userService.getFollowers(this.userId)
                        
        Observable
            .forkJoin(userStream,followersStream)
            .subscribe(joined =>
                {
                    this.user = joined[0];
                    this.followers = joined[1];                    
                }
            )       
    }
}