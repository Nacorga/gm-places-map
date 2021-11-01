import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GmMapComponent } from './gm-map.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [GmMapComponent],
  imports: [CommonModule, GoogleMapsModule, MatProgressSpinnerModule],
  exports: [GmMapComponent],
})
export class GmMapModule {}
