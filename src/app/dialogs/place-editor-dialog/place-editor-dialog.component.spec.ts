import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceEditorDialogComponent } from './place-editor-dialog.component';

describe('PlaceEditorDialogComponent', () => {
  let component: PlaceEditorDialogComponent;
  let fixture: ComponentFixture<PlaceEditorDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlaceEditorDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceEditorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
