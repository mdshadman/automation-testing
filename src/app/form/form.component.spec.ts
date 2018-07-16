import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { FormComponent } from './form.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
describe('formComponent', () => {
  let component: FormComponent;
  beforeEach(() => {
    component = new FormComponent(new FormBuilder());
  });
  it('should create a form with 2 controls', () => {
expect(component.form.contains('name')).toBeTruthy();
expect(component.form.contains('email')).toBeTruthy();
  });
  it('should contain the name control required', () => {
    const control = component.form.get('name');
    control.setValue('');
expect(control.valid).toBeFalsy();
  });
});
