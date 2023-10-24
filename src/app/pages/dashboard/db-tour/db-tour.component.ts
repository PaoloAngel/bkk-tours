import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { Location } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';
import { ToursService } from 'src/app/services/tours.service';

@Component({
  selector: 'app-db-tour',
  templateUrl: './db-tour.component.html',
  styleUrls: ['./db-tour.component.css'],
})
export class DbTourComponent implements OnInit {
  selectedTourId: number | null = null;
  selectedFile!: null;

  constructor(
    private readonly fb: FormBuilder,
    private tourService: ToursService,
    private readonly location: Location
  ) {}

  private destroy$ = new Subject<void>();

  public formSingleTour: FormGroup = this.fb.group({
    titleHeader: new FormControl('', [Validators.required]),
    imageHeaderUrl: new FormControl(''),
    shortDescription: new FormControl('', [Validators.required]),
    fullDescription: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    group: new FormControl(false),
    private: new FormControl(false),
    italian: new FormControl(false),
    english: new FormControl(false),
    available: new FormControl(true),
  });

  ngOnInit(): void {
    this.tourService.selectedTour$
      .pipe(takeUntil(this.destroy$))
      .subscribe((tour) => {
        if (tour) {
          this.formSingleTour.patchValue({
            titleHeader: tour.titleHeader,
            imageHeaderUrl: tour.imageHeaderUrl,
            shortDescription: tour.shortDescription,
            fullDescription: tour.fullDescription,
            price: tour.price,
            group: tour.group,
            private: tour.private,
            italian: tour.italian,
            english: tour.english,
            available: tour.available,
          });
          this.selectedTourId = tour.id;
        }
      });
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onUpdateTour() {
    if (this.formSingleTour.valid && this.selectedTourId) {
      const updatedTourData = this.formSingleTour.value;

      this.tourService
        .updateTour(this.selectedTourId?.toString(), updatedTourData)
        .subscribe();
    }
  }

  onCancelTour() {
    this.location.back();
  }
}
