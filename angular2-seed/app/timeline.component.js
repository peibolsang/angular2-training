System.register(['angular2/core', './tweet.service', './tweet.component', './summary.pipe'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, tweet_service_1, tweet_component_1, summary_pipe_1;
    var TimelineComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tweet_service_1_1) {
                tweet_service_1 = tweet_service_1_1;
            },
            function (tweet_component_1_1) {
                tweet_component_1 = tweet_component_1_1;
            },
            function (summary_pipe_1_1) {
                summary_pipe_1 = summary_pipe_1_1;
            }],
        execute: function() {
            TimelineComponent = (function () {
                function TimelineComponent(tweetService) {
                    this.tweets = tweetService.getTweets();
                }
                TimelineComponent = __decorate([
                    core_1.Component({
                        selector: 'timeline',
                        templateUrl: 'app/timeline.template.html',
                        providers: [tweet_service_1.TweetService],
                        directives: [tweet_component_1.TweetComponent],
                        pipes: [summary_pipe_1.SummaryPipe]
                    }), 
                    __metadata('design:paramtypes', [tweet_service_1.TweetService])
                ], TimelineComponent);
                return TimelineComponent;
            }());
            exports_1("TimelineComponent", TimelineComponent);
        }
    }
});
//# sourceMappingURL=timeline.component.js.map