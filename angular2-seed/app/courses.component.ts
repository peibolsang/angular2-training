import {Component} from 'angular2/core'
import {CourseService} from './course.service'
import {AutoGrowDirective} from './auto-grow.directive'

@Component({
    //CSS Selector for a host HTML element
    //when angular sees an element that matches this CSS selector it will create an instance or component in the host component
    //so  here I am assuming the  host element is an element with the tag "courses"
    selector: 'courses',

    //specifies the HTML it will be inserted in the DOM when the component view is rendered
    template: `
        <h2>Courses</h2>
        {{title}}
        <input type="text" [(ngModel)]="title" autoGrow/>
        <input type="button" (click)="title=''" value="Clear"/>
        <div *ngIf="courses.length > 0">
        <ul>
            <li *ngFor="#course of courses">
            {{course}}
            </li>
        </ul>
        </div>
        <div *ngIf="courses.length==0">No courses yet</div>
    `,
    providers: [CourseService],
    directives: [AutoGrowDirective]
})
export class CoursesComponent{
    title = "The title of courses page";
    courses;

    constructor(courseService: CourseService){
        this.courses = courseService.getCourses();
    }

    onMyInput($event){
        this.title=$event.target.value
    }
}