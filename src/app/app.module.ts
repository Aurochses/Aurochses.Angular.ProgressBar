import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { ProgressBarModule } from '@aurochses/angular-progress-bar';

import { AppComponent } from './app.component';
import { HomeComponent } from './main/home/home.component';
import { OtherComponent } from './main/other/other.component';

const appRoutes: Routes = [
  {
    path: 'other',
    component: OtherComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OtherComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),

    ProgressBarModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
