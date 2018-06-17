import {Component,Input,EventEmitter,Output} from 'angular2/core'

@Component({
    selector: 'star',
    templateUrl: 'app/favorite.template.html',
    styles: [`
        .glyphicon-star { color:orange;}
    `]
})

export class StarComponent{
    
    @Input() isFav = false;

    @Output() change = new EventEmitter();

    onMyClick(){
        this.isFav=!this.isFav;
        this.change.emit({newValue: this.isFav})
    }

}