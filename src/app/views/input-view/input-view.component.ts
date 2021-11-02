import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-view',
  templateUrl: './input-view.component.html',
  styleUrls: ['./input-view.component.scss'],
})
export class InputViewComponent {
  @Output() submit = new EventEmitter<string>();

  fc = new FormControl('');

  onSubmit() {
    this.submit.emit(this.fc.value);
  }
}
