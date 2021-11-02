import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Place } from 'src/app/models/place.model';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private _$places: BehaviorSubject<Place[]> = new BehaviorSubject([] as Place[]);
  public $places: Observable<Place[]> = this._$places.asObservable();
  public get places(): Place[] {
    return this._$places.getValue();
  }

  constructor() {}

  addPlace(place: Place) {
    this._$places.next([...this.places, place]);
  }

  updatePlaceTitle(idx: number, title: string) {
    const places = this.places;
    places[idx].customTitle = title;
    this._$places.next(places);
  }

  removePlace(idx: number) {
    const places = this.places;
    this._$places.next(places.filter((_, i) => idx !== i));
  }
}
