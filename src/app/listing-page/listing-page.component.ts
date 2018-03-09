import {Component, OnInit} from '@angular/core';
import {Listing} from '../../model/listing';
import {ListingService} from '../../services/listing.service';
import {ModalFlagListingContentComponent} from '../modal-flag-listing-content/modal-flag-listing-content.component';
import {FlagService} from '../../services/flag.service';
import {ModalService} from '../../services/modal.service';

@Component({
  selector: 'app-listing-page',
  templateUrl: './listing-page.component.html',
  styleUrls: ['./listing-page.component.css']
})
export class ListingPageComponent implements OnInit {
  listings: Listing[];

  constructor(
    private modalService: ModalService,
    private listingService: ListingService,
    private flagService: FlagService
  ) {}

  ngOnInit(): void {
    this.listingService.getListings().subscribe(res => {
      this.listings = res;
    });
  }

  private openFlagModal(listing): void {
    this.modalService.openModal<ModalFlagListingContentComponent>(ModalFlagListingContentComponent,
      {listing: listing});
  }
}
