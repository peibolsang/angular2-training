System.register(['angular2/core', './courses.component', './authors.component', './star.component', './heart.component', './vote.component', './tweet.component', './timeline.component', './tab.component'], function(exports_1, context_1) {
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
    var core_1, courses_component_1, authors_component_1, star_component_1, heart_component_1, vote_component_1, tweet_component_1, timeline_component_1, tab_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (authors_component_1_1) {
                authors_component_1 = authors_component_1_1;
            },
            function (star_component_1_1) {
                star_component_1 = star_component_1_1;
            },
            function (heart_component_1_1) {
                heart_component_1 = heart_component_1_1;
            },
            function (vote_component_1_1) {
                vote_component_1 = vote_component_1_1;
            },
            function (tweet_component_1_1) {
                tweet_component_1 = tweet_component_1_1;
            },
            function (timeline_component_1_1) {
                timeline_component_1 = timeline_component_1_1;
            },
            function (tab_component_1_1) {
                tab_component_1 = tab_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = "Angular App";
                    this.imageURL = "http://lorempixel.com/400/200";
                    this.isActive = false;
                    this.post = {
                        title: "Title",
                        isFav: true
                    };
                    this.tweet = {
                        counter: 10,
                        like: false
                    };
                    this.user = {
                        voteCount: 10,
                        myVote: 0
                    };
                    this.contentArray = [
                        { viewName: "The Kitchen Sink", viewMode: "sink", content: "hola", default: true },
                        { viewName: "The New Exercises", viewMode: "new", content: "This is Empty", default: false }
                    ];
                }
                AppComponent.prototype.onMyFavChange = function ($event) {
                    console.log($event);
                };
                AppComponent.prototype.onMyClick = function ($event) {
                    $event.stopPropagation();
                    console.log("Clicked", $event);
                };
                AppComponent.prototype.onDivClick = function () {
                    console.log("Handled by Div");
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <tab [contents]=\"contentArray\"></tab>\n        <timeline></timeline>\n        <h1>{{title}}</h1>\n        <img src=\"{{imageURL}}\"/>\n        <img [src]=\"imageURL\"/>\n        <courses></courses>\n        <authors></authors>\n        <heart [like]=\"tweet.like\" [counter]=\"tweet.counter\"></heart>\n        <vote [voteCount]=\"user.voteCount\" [myVote]=\"user.myVote\"></vote>\n        <div>\n        <i class=\"glyphicon glyphicon-star\"></i>\n        <star [isFav]=\"post.isFav\" (change)=\"onMyFavChange($event)\"></star>\n        </div>\n        <br/>\n        <div (click)=\"onDivClick()\">\n            <button \n                class=\"btn btn-primary\" [class.active]=\"isActive\"\n                [ngStyle]=\"{\n                        backgroundColor: isActive ? 'blue' : 'yellow',\n                        color: isActive ? 'white' : 'black',\n                        fontWeight: isActive ? 'bold': 'normal'\n                }\"\n                (click)=\"onMyClick($event)\">Submit</button>\n        </div>\n        ",
                        directives: [courses_component_1.CoursesComponent, authors_component_1.AuthorsComponent, star_component_1.StarComponent, heart_component_1.HeartComponent, vote_component_1.VoteComponent, tweet_component_1.TweetComponent, timeline_component_1.TimelineComponent, tab_component_1.TabComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map