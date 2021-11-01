import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GmAutocompleteComponent } from './gm-autocomplete.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [GmAutocompleteComponent],
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatIconModule],
  exports: [GmAutocompleteComponent],
})
export class GmAutocompleteModule {}
