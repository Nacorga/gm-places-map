import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Marker } from 'src/app/models/marker.model';

@Injectable({
  providedIn: 'root',
})
export class MarkersService {
  private _markers$: BehaviorSubject<Marker[]> = new BehaviorSubject([] as Marker[]);
  public markers$: Observable<Marker[]> = this._markers$.asObservable();
  public get markers(): Marker[] {
    return this._markers$.getValue();
  }

  constructor() {}

  addMarker(place: google.maps.places.PlaceResult) {
    this._markers$.next([
      ...this.markers,
      new Marker({
        lat: place.geometry?.location.lat() as number,
        lng: place.geometry?.location.lng() as number,
      }),
    ]);
  }
}
