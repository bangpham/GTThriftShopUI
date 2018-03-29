import { Component, ViewEncapsulation, EventEmitter, Output } from '@angular/core';

const SORT_OBJECTS: object[] = [
  { text: 'Price: Low to High', params: { sort: 'price', direction: 'ascending' } },
  { text: 'Price: High to Low', params: { sort: 'price', direction: 'descending' } },
  { text: 'Seller Rating', params: { sort: 'userRating', direction: 'descending' } },
  { text: 'Date: Most Recent', params: { sort: 'createdAt', direction: 'descending' } },
  { text: 'Date: Least Recent', params: { sort: 'createdAt', direction: 'ascending' } }
];

const CATEGORY_OBJECTS: object[] = [
  { text: 'All', value: 'all' }
];

@Component({
  selector: 'app-listings-feed-toolbar',
  templateUrl: './listings-feed-toolbar.component.html',
  styleUrls: ['./listings-feed-toolbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ListingsFeedToolbarComponent {

  @Output() listEvent = new EventEmitter<string>();

  private searchString;
  private categoryObjects: object[] = CATEGORY_OBJECTS;
  private selectedCategory: string;
  private sortObjects: object[] = SORT_OBJECTS;
  private selectedSort: object;

  constructor() { }

  public addSearchParams(params: object) {
    if (this.searchString && this.searchString !== '') {
      params['search'] = this.searchString;
    }
  }

  public addSortParams(params: object) {
    if (this.selectedSort) {
      for (const key in this.selectedSort) {
        if (this.selectedSort.hasOwnProperty(key)) {
          params[key] = this.selectedSort[key];
        }
      }
    }
  }

  public addCategoryParams(params: object) {
    if (this.selectedCategory) {
      params['category'] = this.selectedCategory;
    }
  }

  list() {
    this.listEvent.next('');
  }

}
