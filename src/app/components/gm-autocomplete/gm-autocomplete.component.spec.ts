import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GmAutocompleteComponent } from './gm-autocomplete.component';

describe('GmAutocompleteComponent', () => {
  let component: GmAutocompleteComponent;
  let fixture: ComponentFixture<GmAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GmAutocompleteComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GmAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
