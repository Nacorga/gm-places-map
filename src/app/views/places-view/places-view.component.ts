import { Component } from '@angular/core';
import { Place } from 'src/app/models/place.model';
import { MarkersService } from 'src/app/services/markers/markers.service';
import { PlacesService } from 'src/app/services/places/places.service';

@Component({
  selector: 'app-places-view',
  templateUrl: './places-view.component.html',
  styleUrls: ['./places-view.component.scss'],
})
export class PlacesViewComponent {
  $places = this.placesSrv.$places;

  constructor(private markersSrv: MarkersService, private placesSrv: PlacesService) {}

  handlePlace(place: google.maps.places.PlaceResult) {
    this.markersSrv.addMarker(place);
    this.placesSrv.addPlace(new Place(place));
  }
}
