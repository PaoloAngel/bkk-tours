import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BreadcrumbModule } from 'xng-breadcrumb';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DbTourComponent } from './pages/dashboard/db-tour/db-tour.component';
import { InputComponent } from './components/input/input.component';
import { TextAreaComponent } from './components/text-area/text-area.component';
import { ToursBangkokComponent } from './pages/tours-bangkok/tours-bangkok.component';
import { TourBangkokDettComponent } from './pages/tour-bangkok-dett/tour-bangkok-dett.component';
import { SortComponent } from './components/sort/sort.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [
    AppComponent,
    ToursBangkokComponent,
    TourBangkokDettComponent,
    ContactComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    DbTourComponent,
    InputComponent,
    TextAreaComponent,
    SortComponent,
    BreadcrumbsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BreadcrumbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
