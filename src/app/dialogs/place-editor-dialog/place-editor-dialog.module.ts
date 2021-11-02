import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceEditorDialogComponent } from './place-editor-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [PlaceEditorDialogComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
  ],
  exports: [PlaceEditorDialogComponent, MatDialogModule],
})
export class PlaceEditorDialogModule {}
