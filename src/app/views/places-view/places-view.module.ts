import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlacesViewComponent } from './places-view.component';
import { GmAutocompleteModule } from 'src/app/components/gm-autocomplete/gm-autocomplete.module';
import { PlacesListModule } from 'src/app/components/places-list/places-list.module';
import { PlaceEditorDialogModule } from 'src/app/dialogs/place-editor-dialog/place-editor-dialog.module';

@NgModule({
  declarations: [PlacesViewComponent],
  imports: [CommonModule, GmAutocompleteModule, PlacesListModule, PlaceEditorDialogModule],
  exports: [PlacesViewComponent],
})
export class PlacesViewModule {}
