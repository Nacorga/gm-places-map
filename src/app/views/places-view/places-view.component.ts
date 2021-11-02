import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PlaceEditorDialogComponent } from 'src/app/dialogs/place-editor-dialog/place-editor-dialog.component';
import { Place } from 'src/app/models/place.model';
import { MarkersService } from 'src/app/services/markers/markers.service';
import { PlacesService } from 'src/app/services/places/places.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-places-view',
  templateUrl: './places-view.component.html',
  styleUrls: ['./places-view.component.scss'],
})
export class PlacesViewComponent {
  $places = this.placesSrv.$places;

  constructor(private markersSrv: MarkersService, private placesSrv: PlacesService, private dialog: MatDialog) {}

  handlePlace(place: google.maps.places.PlaceResult) {
    this.markersSrv.addMarker(place);
    this.placesSrv.addPlace(new Place(place));
  }

  editPlace(idx: number) {
    this.openPlaceEditor(idx);
  }

  removeItems(idx: number) {
    this.placesSrv.removePlace(idx);
    this.markersSrv.removeMarker(idx);
  }

  private openPlaceEditor(placeIdx: number) {
    const { formatted_address, customTitle } = this.placesSrv.places[placeIdx];
    this.dialog
      .open(PlaceEditorDialogComponent, {
        data: {
          placeIdx,
          customTitle: customTitle || formatted_address,
        },
      })
      .afterClosed()
      .pipe(filter((res) => !!res))
      .subscribe((res) => {
        this.placesSrv.updatePlaceTitle(placeIdx, res);
      });
  }
}
