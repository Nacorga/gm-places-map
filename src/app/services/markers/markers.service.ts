import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Marker } from 'src/app/models/marker.model';

@Injectable({
  providedIn: 'root',
})
export class MarkersService {
  private _$markers: BehaviorSubject<Marker[]> = new BehaviorSubject([] as Marker[]);
  public $markers: Observable<Marker[]> = this._$markers.asObservable();
  public get markers(): Marker[] {
    return this._$markers.getValue();
  }

  constructor() {}

  addMarker(place: google.maps.places.PlaceResult) {
    this._$markers.next([
      ...this.markers,
      new Marker({
        lat: place.geometry?.location.lat() as number,
        lng: place.geometry?.location.lng() as number,
      }),
    ]);
  }
}
