import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapViewComponent } from './map-view.component';
import { GmMapModule } from 'src/app/components/gm-map/gm-map.module';

@NgModule({
  declarations: [MapViewComponent],
  imports: [CommonModule, GmMapModule],
  exports: [MapViewComponent],
})
export class MapViewModule {}
