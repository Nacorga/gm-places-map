import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Place } from 'src/app/models/place.model';

@Component({
  selector: 'app-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.scss'],
})
export class PlacesListComponent implements OnInit {
  @Input() places: Place[] = [];

  @Output() editPlace = new EventEmitter<number>();
  @Output() removePlace = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  onEdit(idx: number) {
    this.editPlace.emit(idx);
  }

  onRemove(idx: number) {
    this.removePlace.emit(idx);
  }
}
