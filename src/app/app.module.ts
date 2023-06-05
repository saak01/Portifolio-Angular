import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { HeaderComponent } from './modules/header/components/header/header.component';
import { HomeComponent } from './modules/home/components/home/home.component';
import { ProfessionalExperiencesComponent } from './modules/professional-experiences/components/professional-experiences/professional-experiences.component';
import { MyProjectsComponent } from './modules/my-projects/components/my-projects/my-projects.component'; 
import { AboutMeComponent } from './modules/about-me/components/about-me/about-me.component';

import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card'; 
import {MatDividerModule} from '@angular/material/divider'; 
import {MatButtonModule} from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { NavComponent } from './modules/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProfessionalExperiencesComponent,
    MyProjectsComponent,
    AboutMeComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatListModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
