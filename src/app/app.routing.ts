import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ToursBangkokComponent } from './pages/tours-bangkok/tours-bangkok.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DbTourComponent } from './pages/dashboard/db-tour/db-tour.component';
import { TourBangkokDettComponent } from './pages/tour-bangkok-dett/tour-bangkok-dett.component';

export enum AppRoutes {
  HOME = 'home',
  TOURS_BANGKOK = 'tours-bangkok',
  TOUR_BANGKOK_DETAILS = 'tour-bangkok-dett',
  DB_TOUR = 'db-tour',
  CONTACT = 'contact',
}

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: AppRoutes.TOURS_BANGKOK,
  },
  {
    path: AppRoutes.HOME,
    component: HomeComponent,
    data: { breadcrumb: 'Home' },
  },
  {
    path: AppRoutes.TOURS_BANGKOK,
    data: { breadcrumb: 'Tours of Bangkok' },
    children: [
      {
        path: ':titleHeader',
        component: TourBangkokDettComponent,
        data: { breadcrumb: 'Tour Details' },
      },
      {
        path: '',
        component: ToursBangkokComponent,
      },
    ],
  },
  {
    path: `${AppRoutes.TOURS_BANGKOK}/${AppRoutes.TOUR_BANGKOK_DETAILS}/:id`,
    component: TourBangkokDettComponent,
    data: { breadcrumb: 'Tour Details' },
  },
  {
    path: `${AppRoutes.DB_TOUR}/:id`,
    component: DbTourComponent,
    data: { breadcrumb: 'Edit Tour' },
  },
  {
    path: AppRoutes.CONTACT,
    component: ContactComponent,
    data: { breadcrumb: 'Contact' },
  },
  { path: '**', redirectTo: AppRoutes.HOME },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
