import { AfterViewInit, Component, ElementRef, EventEmitter, Input, NgZone, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-gm-autocomplete',
  templateUrl: './gm-autocomplete.component.html',
  styleUrls: ['./gm-autocomplete.component.scss'],
})
export class GmAutocompleteComponent implements AfterViewInit {
  @Input() label!: string;
  @Input() disabled!: boolean;
  @Input() value: string = '';

  @Output() placeChange = new EventEmitter<google.maps.places.PlaceResult>();

  @ViewChild('search') searchElementRef!: ElementRef;

  constructor(private ngZone: NgZone) {}

  ngAfterViewInit() {
    this.initAutocomplete();
  }

  private initAutocomplete() {
    const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {});
    autocomplete.addListener('place_changed', () => {
      this.ngZone.run(() => {
        const place: google.maps.places.PlaceResult = autocomplete.getPlace();
        this.placeChange.emit(place);
        this.reset();
      });
    });
  }

  reset() {
    this.searchElementRef.nativeElement.value = '';
  }
}
