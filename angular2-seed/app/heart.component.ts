import {Component,Input} from 'angular2/core'

@Component({
    selector: 'heart',
    templateUrl: 'app/heart.template.html',
     styles: [`
        .glyphicon-heart { color:#ccc;
                           cursor:pointer;
            }
        .highlighted {color: deeppink;}
    `]
})

export class HeartComponent{
    @Input() counter;
    @Input() like;
    
    onMyClick(){
        if (this.like) this.counter=this.counter-1
        else this.counter=this.counter+1;
        this.like = ! this.like
    }
}