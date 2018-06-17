import {Component,Input,Output,EventEmitter} from 'angular2/core'

@Component({
    selector: 'vote',
    templateUrl: 'app/vote.template.html',
    styles: [`
        .vote-container{width:20px;align:center; text:bold;}
        .up {color:orange}
        .down {color:red}
    `]
})

export class VoteComponent{
    @Input() voteCount;
    thevoteUp;
    thevoteDown;
    @Input() myVote;

    voteUp(){
        if(this.myVote==1) return;
        if (this.myVote==-1) this.thevoteUp=false;
        else this.thevoteUp = true
        this.thevoteDown = false;
        this.myVote++;

    }

    voteDown(){
        if (this.myVote==-1) return;
        if (this.myVote==1) this.thevoteDown=false;
        else this.thevoteDown = true;
        this.thevoteUp = false;
        this.myVote--;

    }
}