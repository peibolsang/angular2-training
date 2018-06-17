System.register(['angular2/core', './course.service', './auto-grow.directive'], function(exports_1, context_1) {
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
    var core_1, course_service_1, auto_grow_directive_1;
    var CoursesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (course_service_1_1) {
                course_service_1 = course_service_1_1;
            },
            function (auto_grow_directive_1_1) {
                auto_grow_directive_1 = auto_grow_directive_1_1;
            }],
        execute: function() {
            CoursesComponent = (function () {
                function CoursesComponent(courseService) {
                    this.title = "The title of courses page";
                    this.courses = courseService.getCourses();
                }
                CoursesComponent.prototype.onMyInput = function ($event) {
                    this.title = $event.target.value;
                };
                CoursesComponent = __decorate([
                    core_1.Component({
                        //CSS Selector for a host HTML element
                        //when angular sees an element that matches this CSS selector it will create an instance or component in the host component
                        //so  here I am assuming the  host element is an element with the tag "courses"
                        selector: 'courses',
                        //specifies the HTML it will be inserted in the DOM when the component view is rendered
                        template: "\n        <h2>Courses</h2>\n        {{title}}\n        <input type=\"text\" [(ngModel)]=\"title\" autoGrow/>\n        <input type=\"button\" (click)=\"title=''\" value=\"Clear\"/>\n        <div *ngIf=\"courses.length > 0\">\n        <ul>\n            <li *ngFor=\"#course of courses\">\n            {{course}}\n            </li>\n        </ul>\n        </div>\n        <div *ngIf=\"courses.length==0\">No courses yet</div>\n    ",
                        providers: [course_service_1.CourseService],
                        directives: [auto_grow_directive_1.AutoGrowDirective]
                    }), 
                    __metadata('design:paramtypes', [course_service_1.CourseService])
                ], CoursesComponent);
                return CoursesComponent;
            }());
            exports_1("CoursesComponent", CoursesComponent);
        }
    }
});
//# sourceMappingURL=courses.component.js.map