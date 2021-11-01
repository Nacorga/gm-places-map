import { Component } from '@angular/core';
import { MarkersService } from 'src/app/services/markers/markers.service';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss'],
})
export class MapViewComponent {
  $markers = this.markersSrv.$markers;
  constructor(private markersSrv: MarkersService) {}
}
