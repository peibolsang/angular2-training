import {Pipe,PipeTransform} from 'angular2/core';

@Pipe({
    name:'summary'
})

export class SummaryPipe implements PipeTransform{
    transform(value:string, args: string[]){

        var limit = (args && args[0])? parseInt(args[0]) : 132;
        var cut = " [contd.]";

        if (value.length>limit) return value.substring(0, limit-cut.length) + cut;
        else return value;
    }
}