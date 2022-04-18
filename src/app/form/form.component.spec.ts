import { ComponentFixture, TestBed } from '@angular/core/testing';

import { formComponent } from './form.component';

describe('FormComponent', () => {
  let component: formComponent;
  let fixture: ComponentFixture<formComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ formComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(formComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
