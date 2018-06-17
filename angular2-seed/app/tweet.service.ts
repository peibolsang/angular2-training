import {TweetComponent} from './tweet.component'


export class TweetService{
    tweet1 = {picture:'http://lorempixel.com/100/100/people?1', user:'@peibolsang', text:'This is text 1 aslfasdfasdfasd laksjdf lasjf lsajflsakjf lsajdflas djflaksjf lsakjdf lsakjfdl sajfdlsakjd flsakdjflsakdjflsa jflkjsadflaskjdXXXXXXXXXXXXXXXXX',like:true,counter:1000}
    tweet2 = {picture:'http://lorempixel.com/100/100/people?2', user:'@potorrus', text:'This is text 2',like:false,counter:1212}
    tweet3 = {picture:'http://lorempixel.com/100/100/people?3', user:'@sebastianelcano', text:'This is text 3',like:true,counter:12}

      getTweets(){
        return[this.tweet1,this.tweet2,this.tweet3]
      }
}