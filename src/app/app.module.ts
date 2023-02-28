import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TimelineComponent } from './timeline/timeline.component';
import { SkillsComponent } from './skills/skills.component';
import { FormDialog } from './contact-me/form-dialog/form-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactModule } from './contact-me/contact.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    TimelineComponent,
    SkillsComponent,
    FormDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,  
    ContactModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
