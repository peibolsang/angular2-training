import {Component} from 'angular2/core'
import {TweetService} from './tweet.service'
import {TweetComponent} from './tweet.component'
import {SummaryPipe} from './summary.pipe'

@Component({
    selector: 'timeline',
    templateUrl: 'app/timeline.template.html',
    providers:[TweetService],
    directives:[TweetComponent],
    pipes: [SummaryPipe]
})

export class TimelineComponent{
   tweets;

    constructor(tweetService: TweetService){
        this.tweets = tweetService.getTweets();
    }

}