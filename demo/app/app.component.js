/// <reference path="../typings/tsd.d.ts" />
System.register(['angular2/core', './post.service', 'angular2/http', './user.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, post_service_1, http_1, user_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (post_service_1_1) {
                post_service_1 = post_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (user_component_1_1) {
                user_component_1 = user_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.user = "peibolsang";
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: '<user [userId]="user"></user>',
                        //template: `
                        //  <form [ngFormModel]="form">
                        //      <input type="text" ngControl="search"/>
                        //  </form>
                        //  `,
                        directives: [user_component_1.UserComponent],
                        providers: [post_service_1.PostService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
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
//# sourceMappingURL=app.component.js.map