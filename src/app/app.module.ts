import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MusicGroupAppComponent } from './music-group-app.component';
import { MemberListComponent } from './members/member-list.component';
import { MemberThumbnailComponent } from './members/member-thumbnail.component';
import { SiteHeaderComponent } from './site-header.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    MusicGroupAppComponent,
    MemberListComponent,
    MemberThumbnailComponent,
    SiteHeaderComponent
  ],
  
  bootstrap: [MusicGroupAppComponent]
})
export class AppModule { }
