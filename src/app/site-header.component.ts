import { Component } from '@angular/core';

@Component({
    selector:'site-header',
    template:`<div style="margin-top:20px" class="row well hoverwell thumbnail"><h3>My Music Group</h3></div>`,
    styles:[`
    div{text-align: center}
    h3{font-family: "Times New Roman", Times, serif;font-size: 35px;color:#ff8000}
    `]
})
export class SiteHeaderComponent{

}