System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TweetService;
    return {
        setters:[],
        execute: function() {
            TweetService = (function () {
                function TweetService() {
                    this.tweet1 = { picture: 'http://lorempixel.com/100/100/people?1', user: '@peibolsang', text: 'This is text 1 aslfasdfasdfasd laksjdf lasjf lsajflsakjf lsajdflas djflaksjf lsakjdf lsakjfdl sajfdlsakjd flsakdjflsakdjflsa jflkjsadflaskjdXXXXXXXXXXXXXXXXX', like: true, counter: 1000 };
                    this.tweet2 = { picture: 'http://lorempixel.com/100/100/people?2', user: '@potorrus', text: 'This is text 2', like: false, counter: 1212 };
                    this.tweet3 = { picture: 'http://lorempixel.com/100/100/people?3', user: '@sebastianelcano', text: 'This is text 3', like: true, counter: 12 };
                }
                TweetService.prototype.getTweets = function () {
                    return [this.tweet1, this.tweet2, this.tweet3];
                };
                return TweetService;
            }());
            exports_1("TweetService", TweetService);
        }
    }
});
//# sourceMappingURL=tweet.service.js.map