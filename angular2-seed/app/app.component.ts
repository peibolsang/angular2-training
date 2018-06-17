import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component'
import {AuthorsComponent} from './authors.component'
import {StarComponent} from './star.component'
import {HeartComponent} from './heart.component'
import {VoteComponent} from './vote.component'
import {TweetComponent} from './tweet.component'
import {TimelineComponent} from './timeline.component'
import {TabComponent} from './tab.component'

@Component({
    selector: 'my-app',
    template: `
        <tab [contents]="contentArray"></tab>
        <timeline></timeline>
        <h1>{{title}}</h1>
        <img src="{{imageURL}}"/>
        <img [src]="imageURL"/>
        <courses></courses>
        <authors></authors>
        <heart [like]="tweet.like" [counter]="tweet.counter"></heart>
        <vote [voteCount]="user.voteCount" [myVote]="user.myVote"></vote>
        <div>
        <i class="glyphicon glyphicon-star"></i>
        <star [isFav]="post.isFav" (change)="onMyFavChange($event)"></star>
        </div>
        <br/>
        <div (click)="onDivClick()">
            <button 
                class="btn btn-primary" [class.active]="isActive"
                [ngStyle]="{
                        backgroundColor: isActive ? 'blue' : 'yellow',
                        color: isActive ? 'white' : 'black',
                        fontWeight: isActive ? 'bold': 'normal'
                }"
                (click)="onMyClick($event)">Submit</button>
        </div>
        `,
    directives: [CoursesComponent,AuthorsComponent,StarComponent,HeartComponent,VoteComponent,TweetComponent,TimelineComponent,TabComponent]
})
//This is a view component that takes control of the entire App (or entire page)
export class AppComponent {
    title = "Angular App";
    imageURL = "http://lorempixel.com/400/200";
    isActive = false;

    onMyFavChange($event){
        console.log($event);
    }

    onMyClick($event){
        $event.stopPropagation();
        console.log("Clicked",$event);
    }

    onDivClick(){
        console.log("Handled by Div")
    }

    post = {
        title: "Title",
        isFav: true
    }

    tweet = {
        counter:  10,
        like: false
    }

    user = {
        voteCount: 10,
        myVote: 0
    }

    contentArray = [
        {viewName:"The Kitchen Sink",viewMode: "sink",content: "hola", default: true},
        {viewName:"The New Exercises",viewMode: "new", content: "This is Empty", default:false}
        ]
 }