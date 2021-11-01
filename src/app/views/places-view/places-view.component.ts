import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Marker } from 'src/app/models/marker.model';
import { MarkersService } from 'src/app/services/markers/markers.service';

@Component({
  selector: 'app-places-view',
  templateUrl: './places-view.component.html',
  styleUrls: ['./places-view.component.scss'],
})
export class PlacesViewComponent implements OnInit {
  constructor(private markersSrv: MarkersService) {}

  ngOnInit(): void {}

  handlePlace(place: google.maps.places.PlaceResult) {
    this.markersSrv.addMarker(place);
  }
}
