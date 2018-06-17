System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var VoteComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            VoteComponent = (function () {
                function VoteComponent() {
                }
                VoteComponent.prototype.voteUp = function () {
                    if (this.myVote == 1)
                        return;
                    if (this.myVote == -1)
                        this.thevoteUp = false;
                    else
                        this.thevoteUp = true;
                    this.thevoteDown = false;
                    this.myVote++;
                };
                VoteComponent.prototype.voteDown = function () {
                    if (this.myVote == -1)
                        return;
                    if (this.myVote == 1)
                        this.thevoteDown = false;
                    else
                        this.thevoteDown = true;
                    this.thevoteUp = false;
                    this.myVote--;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], VoteComponent.prototype, "voteCount", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], VoteComponent.prototype, "myVote", void 0);
                VoteComponent = __decorate([
                    core_1.Component({
                        selector: 'vote',
                        templateUrl: 'app/vote.template.html',
                        styles: ["\n        .vote-container{width:20px;align:center; text:bold;}\n        .up {color:orange}\n        .down {color:red}\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], VoteComponent);
                return VoteComponent;
            }());
            exports_1("VoteComponent", VoteComponent);
        }
    }
});
//# sourceMappingURL=vote.component.js.map