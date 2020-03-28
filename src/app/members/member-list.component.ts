import { Component } from '@angular/core';

/*parent component definition. property binding for data 
passing between parent to child and Vice versa happened here.*/
@Component({
    selector:'member-list',
    template: `<div class="row well hoverwell thumbnail" *ngFor="let currentMember of groupMembers">
    <member-thumbnail (childToParentEventClick)="handleEventClickedInParent($event)"
    [member]="currentMember"></member-thumbnail>
    </div>`,
    styles : [`
    .row{width:80%;position:relative;left:10%}
    `]

})
export class MemberListComponent{
  
    groupMembers = [
        {
          firstName : "Samuel",
          lastName : "Gonzales",
          plays : "Guitar"
        },
        {
          firstName : "Rubina",
          lastName : "Khatoon",
          plays : "Rabab"
        },
        {
          firstName : "Mandira",
          lastName : "Naj",
          plays : "Chello"
        },
        {
          firstName : "Nishad",
          lastName : "Ahmed",
          plays : "Blue Harp"
        },
        
    
      ];

      handleEventClickedInParent(data:any){
        alert(data);
        
      }

}