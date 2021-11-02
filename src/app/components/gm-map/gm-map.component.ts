import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, MapInfoWindow } from '@angular/google-maps';
import { Marker } from 'src/app/models/marker.model';

const MAP_OPTS: google.maps.MapOptions = {
  mapTypeId: '',
  zoomControl: false,
  scrollwheel: false,
  disableDoubleClickZoom: true,
  draggable: false,
  fullscreenControl: false,
  mapTypeControl: false,
  streetViewControl: false,
  maxZoom: 16,
};

@Component({
  selector: 'app-gm-map',
  templateUrl: './gm-map.component.html',
  styleUrls: ['./gm-map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GmMapComponent implements OnInit {
  @Input() set markers(markers: Marker[]) {
    this._markers = markers;
    this.fitBounds();
  }

  get markers(): Marker[] {
    return this._markers;
  }

  @ViewChild(GoogleMap, { static: false }) set map(map: GoogleMap) {
    this._map = map;
  }

  get map(): GoogleMap {
    return this._map;
  }

  @ViewChild(MapInfoWindow, { static: false }) info!: MapInfoWindow;

  _map!: GoogleMap;
  _markers: Marker[] = [];
  center!: google.maps.LatLngLiteral;
  bounds = new google.maps.LatLngBounds();
  options: google.maps.MapOptions = MAP_OPTS;
  infoContent = '';
  loading = true;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.getCurrentPosition();
  }

  getCurrentPosition() {
    navigator.geolocation.getCurrentPosition((position) => {
      if (position) {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      }
      this.loading = false;
      this.cdr.detectChanges();
    });
  }

  fitBounds() {
    if (this.map && this.markers.length > 0) {
      this.bounds = new google.maps.LatLngBounds();
      this.markers.forEach((elem) => this.bounds.extend(new google.maps.LatLng(elem.position.lat, elem.position.lng)));
      this.map.fitBounds(this.bounds);
    }
  }
}
