import { IPosition } from '../interfaces/position.interface';

export class Place {
  uuid!: string;
  markerId!: string;
  address_components: { long_name: string; short_name: string }[] = [];
  formatted_address: string | undefined;
  place_id: string | undefined;
  vicinity: string | undefined;
  position!: IPosition;
  customTitle?: string;

  constructor(place: google.maps.places.PlaceResult) {
    this.address_components = place.address_components ? this.getAddressComponents(place) : [];
    this.formatted_address = place.formatted_address;
    this.place_id = place.place_id;
    this.vicinity = place.vicinity;
    this.position = {
      lat: place.geometry?.location.lat() as number,
      lng: place.geometry?.location.lng() as number,
    };
  }

  private getAddressComponents(place: google.maps.places.PlaceResult): { long_name: string; short_name: string }[] {
    return place
      .address_components!.slice(0, 3)
      .map((elem) => ({ long_name: elem.long_name, short_name: elem.short_name }));
  }
}
