import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GmMapComponent } from './gm-map.component';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  declarations: [GmMapComponent],
  imports: [CommonModule, GoogleMapsModule],
  exports: [GmMapComponent],
})
export class GmMapModule {}
