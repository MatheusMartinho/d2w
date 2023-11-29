import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ExperienceComponent } from './experience/experience.component';
import { QualitiesComponent } from './qualities/qualities.component';
import { InstallationComponent } from './installation/installation.component';
import { InnovativeComponent } from './innovative/innovative.component';
import { CustomersayComponent } from './customersay/customersay.component';
import { FaqComponent } from './faq/faq.component';
import { TeamComponent } from './team/team.component';
import { HiringComponent } from './hiring/hiring.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ExperienceComponent,
    QualitiesComponent,
    InstallationComponent,
    InnovativeComponent,
    CustomersayComponent,
    FaqComponent,
    TeamComponent,
    HiringComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
