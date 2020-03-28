import { Component, Input, Output,EventEmitter } from '@angular/core';


@Component({
    selector : 'member-thumbnail',
    templateUrl: './member-thumbnail.component.html',
    styles:[`.pad-left{text-align:right}
    .btn-primary{background-color: #4CAF50;}`]
})
export class MemberThumbnailComponent{
@Input() member:any;
prop:string = "Test property"
@Output() childToParentEventClick = new EventEmitter();
handleClick(){
    this.childToParentEventClick.emit(`Hey Visitor.. I am ${this.member.firstName}. I play ${this.member.plays}`);
    
}



}