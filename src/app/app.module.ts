import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlacesViewModule } from './views/places-view/places-view.module';
import { MapViewModule } from './views/map-view/map-view.module';
import { InputViewModule } from './views/input-view/input-view.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PlacesViewModule,
    MapViewModule,
    InputViewModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
