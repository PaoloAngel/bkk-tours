import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { AppRoutes } from 'src/app/app.routing';
import { ToursService } from 'src/app/services/tours.service';
import { ITourList } from 'src/app/shared/types/tours.type';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-tour-bangkok-dett',
  templateUrl: './tour-bangkok-dett.component.html',
  styleUrls: ['./tour-bangkok-dett.component.css'],
})
export class TourBangkokDettComponent {
  private destroy$ = new Subject<void>();
  tourDetails: ITourList | null = null;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly toursService: ToursService,
    private readonly router: Router,
    private readonly utilsService: UtilsService
  ) {}

  ngOnInit(): void {
    console.log('TourBangkokDettComponent loaded');

    // Log the entire ActivatedRoute object for inspection
    console.log('ActivatedRoute:', this.activatedRoute);

    // Fetch params using ActivatedRoute's snapshot
    const tourId = this.activatedRoute.snapshot.params['id'];
    const tourTitleHeader = this.activatedRoute.snapshot.params['titleHeader'];

    console.log('tourId (Snapshot):', tourId);
    console.log('tourTitleHeader (Snapshot):', tourTitleHeader);

    // Fetch params using ActivatedRoute's observable
    this.activatedRoute.params.subscribe((params) => {
      const tourTitleHeaderObs = params['titleHeader'];
      console.log('tourTitleHeader (Observable):', tourTitleHeaderObs);
    });

    if (tourTitleHeader) {
      const slugTitle = this.utilsService.generateSlug(tourTitleHeader);
      console.log('slugTitle:', slugTitle);

      this.toursService
        .getTourByTitleHeader(slugTitle)
        .pipe(takeUntil(this.destroy$))
        .subscribe((tour) => {
          this.tourDetails = tour;
        });
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  editTour() {
    if (this.tourDetails && this.tourDetails.id) {
      this.toursService.setActiveTour(this.tourDetails);
      this.router.navigate([`/${AppRoutes.DB_TOUR}`, this.tourDetails.id]);
    }
  }
}
