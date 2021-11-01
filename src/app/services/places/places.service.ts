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
}
