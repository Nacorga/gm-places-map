import { Component, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-place-editor-dialog',
  templateUrl: './place-editor-dialog.component.html',
  styleUrls: ['./place-editor-dialog.component.scss'],
})
export class PlaceEditorDialogComponent {
  customTitleFC: FormControl = new FormControl(
    this.data.customTitle,
    Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(120)])
  );

  constructor(
    private dialogRef: MatDialogRef<PlaceEditorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { placeIdx: string; customTitle: string }
  ) {}

  onSave() {
    this.dialogRef.close(this.customTitleFC.value);
  }
}
