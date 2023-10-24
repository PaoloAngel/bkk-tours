// In tours.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITourList } from '../shared/types/tours.type';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class ToursService {
  private apiUrl = environment.apiUrl;

  constructor(private readonly http: HttpClient) {}

  // ADD a BehaviorSubject for the ACTIVE tour
  private activeTour$: BehaviorSubject<ITourList | null> =
    new BehaviorSubject<ITourList | null>(null);

  selectedTour$: Observable<ITourList | null> = this.activeTour$.asObservable();

  getToursList(): Observable<ITourList[]> {
    return this.http.get<ITourList[]>(this.apiUrl);
  }

  // getTourById(tourId: string | number): Observable<ITourList> {
  //   return this.http.get<ITourList>(`${this.apiUrl}/${tourId}`);
  // }

  getTourByTitleHeader(tourTitle: string): Observable<ITourList> {
    return this.http.get<ITourList>(
      `${this.apiUrl}/titleHeader${'titleHeader'}`
    );
  }

  createTour() {}

  updateTour(
    tourId: string,
    updatedTourData: ITourList
  ): Observable<ITourList> {
    const updateUrl = `${this.apiUrl}/${tourId}`;
    return this.http.put<ITourList>(updateUrl, updatedTourData);
  }

  deleteTour() {}

  // Set a single tour as active
  setActiveTour(tour: ITourList) {
    this.activeTour$.next(tour);
  }
}
