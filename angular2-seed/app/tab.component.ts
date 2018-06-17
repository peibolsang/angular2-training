import {Component,Input} from 'angular2/core'

@Component({
    selector:'tab',
    templateUrl: 'app/tab.template.html'
})

export class TabComponent{
    @Input() contents;
    @Input() viewMode;

    viewModeChange(vm){
        this.viewMode=vm;
    }

    viewModeCheck(vm): boolean{
        return this.viewMode==vm;
    }
}