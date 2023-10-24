import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';
import { ToursService } from 'src/app/services/tours.service';
import { ITourList } from 'src/app/shared/types/tours.type';
import { Router } from '@angular/router';
import { AppRoutes } from 'src/app/app.routing';

@Component({
  selector: 'app-tours-bangkok',
  templateUrl: './tours-bangkok.component.html',
  styleUrls: ['./tours-bangkok.component.css'],
})
export class ToursBangkokComponent implements OnInit {
  private toursList = new BehaviorSubject<ITourList[]>([]);
  toursList$ = this.toursList.asObservable();

  constructor(
    private readonly toursService: ToursService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.toursService
      .getToursList()
      .pipe(take(1))
      .subscribe((data) => {
        this.toursList.next(data);
      });
  }

  // Sorting methods
  sortTours(direction: 'low' | 'high') {
    const sortedTours = [...this.toursList.value].sort((a, b) => {
      if (direction === 'low') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

    this.toursList.next(sortedTours);
  }

  openTourDetails(tour: ITourList) {
    if (tour) {
      this.toursService.setActiveTour(tour);
      this.router.navigate([
        `/${AppRoutes.TOURS_BANGKOK}/${AppRoutes.TOUR_BANGKOK_DETAILS}`,
        tour.id,
      ]);
    }
  }
}
