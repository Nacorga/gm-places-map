import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlacesListComponent } from './places-list.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [PlacesListComponent],
  imports: [CommonModule, MatMenuModule, MatIconModule, MatCardModule, MatButtonModule],
  exports: [PlacesListComponent],
})
export class PlacesListModule {}
