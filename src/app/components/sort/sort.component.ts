import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css'],
})
export class SortComponent {
  isDropdownHidden = true;
  displayedSortOrder: string = 'Sort by Price';

  // EVENTS to be emitted when a sort option is selected
  @Output() sortByLowest = new EventEmitter<void>();
  @Output() sortByHighest = new EventEmitter<void>();

  toggleDropdown() {
    console.log('Toggle Dropdown');
    this.isDropdownHidden = !this.isDropdownHidden;
  }

  // EMIT the event
  onSortByLowest() {
    console.log('Emitting sortByLowest');
    this.sortByLowest.emit();
    this.displayedSortOrder = 'Sort by Lowest';
  }

  onSortByHighest() {
    console.log('Emitting sortByHighest');
    this.sortByHighest.emit();
    this.displayedSortOrder = 'Sort by Highest';
  }
}
