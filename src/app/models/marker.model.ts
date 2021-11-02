import { IPosition } from '../interfaces/position.interface';

export interface IMarkerLabel {
  color: 'red';
}

export interface IMarkerOpts {
  animation: google.maps.Animation;
}
export class Marker {
  position!: IPosition;
  label: IMarkerLabel = {
    color: 'red',
  };
  options: IMarkerOpts = {
    animation: google.maps.Animation.DROP,
  };

  constructor(position: IPosition, label?: IMarkerLabel, options?: IMarkerOpts) {
    this.position = position;
    this.label = label || this.label;
    this.options = options || this.options;
  }
}
