import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WorkContentComponent, StereothequeModal, KevsModal } from './work-content/work-content.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { MatMenuModule, MatButtonModule, MatIconModule, MatCardModule, MatButtonToggleModule, MatDialogModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkContentComponent,
    ContactComponent,
    AboutComponent,
    LayoutComponent,
    StereothequeModal,
    KevsModal
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    MatButtonModule, MatMenuModule, MatIconModule, MatCardModule, MatButtonToggleModule, MatDialogModule
  ],
  entryComponents:[StereothequeModal,KevsModal],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
