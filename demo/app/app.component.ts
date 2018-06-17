/// <reference path="../typings/tsd.d.ts" />

import {Component} from 'angular2/core';
//import {Observable} from 'rxjs/Observable';
//import {ControlGroup, FormBuilder} from 'angular2/common';
//import 'rxjs/add/operator/debounceTime';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/mergeMap';
//import 'rxjs/add/operator/delay';
//import 'rxjs/add/observable/forkJoin';
//import 'rxjs/add/observable/throw';
//import 'rxjs/add/operator/retry';
//import 'rxjs/add/observable/fromArray';
//import 'rxjs/add/observable/empty';
//import 'rxjs/add/observable/range';
//import 'rxjs/add/observable/interval';
import {PostService} from './post.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import {OnInit} from 'angular2/core';
import {UserComponent} from './user.component'

@Component({
    selector: 'my-app',
    template: '<user [userId]="user"></user>',
    //template: `
      //  <form [ngFormModel]="form">
      //      <input type="text" ngControl="search"/>
      //  </form>
      //  `,
    directives: [UserComponent],
    providers: [PostService,HTTP_PROVIDERS]
})


export class AppComponent{

  user = "peibolsang";
    

/*
    isLoading = true;

    constructor(private _postService: PostService){
       this._postService.createPost({userId: 1, title:"a", body:"b"})
    }

    ngOnInit(){
         this._postService.getPosts()
                         .subscribe(posts=> {
                             this.isLoading = false;
                             console.log(posts[0].body)
                            });
    }
*/

}


/*export class AppComponent {
    
    form: ControlGroup;

    constructor(fb: FormBuilder){

        this.form = fb.group({
            search: []
        });

        var search = this.form.find('search')

        search.valueChanges     
            .debounceTime(400)
            .map(str=>(<string>str).replace(' ','-'))
            .subscribe(x=>console.log(x))

        var observable = Observable.fromArray([1,2,3]);
        var startDates = [];
        var startDate = new Date();

        for (var day = -2; day <=2; day++){
            var date = new Date(
                startDate.getFullYear(),
                startDate.getMonth(),
                startDate.getDate()+day);
            startDates.push(date); 
        }

        Observable
            .fromArray(startDates)
            .map(date=>{
                console.log("Getting deals for date" + date);
                return [1,2,3];
            })
            .subscribe(x=>console.log(x))


        var o = Observable.of(1);
        o.subscribe(x=>console.log(x));

        o = Observable.of(1,2,3);
        o.subscribe(x=>console.log(x));

        o = Observable.empty();
        o.subscribe(x=>console.log(x));

        o = Observable.range(1,5);
        o.subscribe(x=>console.log(x));

        o = Observable.fromArray([1,2,3])
        o.subscribe(x=>console.log(x));

        var a = Observable.of([1,2,3])
        a.subscribe(x=>console.log(x));


        /*Observable
            .interval(1000)
            .flatMap(x=>{
                console.log("calling the server to get the latest news");
                return Observable.of([1,2,3]);
            })
            .subscribe(news=>console.log(news))
      
        
        var userStream = Observable.of({
            userId:1, username: 'peibolsang'
        }).delay(2000)

        var tweetStream = Observable.of([1,2,3]).delay(1500);

        Observable
            .forkJoin(userStream,tweetStream)
            .map(joined =>
                new Object({user: joined[0], tweets: joined[1]})
            )
            .subscribe(result=>console.log(result))

        var oby = Observable.throw(new Error("Something went wrong"))

        oby.subscribe(
            x=>console.log(x),
            error=>console.error(error)
        )
      
        var counter = 0
        var ajaxCall = Observable.of('url')
            .flatMap(() =>{
                if(++counter<2)
                    return Observable.throw(new Error("Request failed"));
                return Observable.of([1,2,3])
            });

        ajaxCall
            .retry(3)
            .subscribe(
            x=>console.log(x),
            error=>console.error(error)
        )


        /*var keyups = Observable.fromEvent($("#search"),"keyup")
            .map(e => e.target.value)
            .filter(text => text.length>=3)
            .debounceTime(400)
            .distinctUntilChanged()
            .flatMap(searchTerm => {
                 var url = "https://api.spotify.com/v1/search?type=artist&q="+searchTerm;
                 var promise = $.getJSON(url);
                 return Observable.fromPromise(promise);
            })
            
        var subscription = keyups.subscribe(data=>console.log(data));
             
    }
}
*/