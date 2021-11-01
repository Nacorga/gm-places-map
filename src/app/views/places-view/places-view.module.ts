import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlacesViewComponent } from './places-view.component';
import { GmAutocompleteModule } from 'src/app/components/gm-autocomplete/gm-autocomplete.module';

@NgModule({
  declarations: [PlacesViewComponent],
  imports: [CommonModule, GmAutocompleteModule],
  exports: [PlacesViewComponent],
})
export class PlacesViewModule {}
