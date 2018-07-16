import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [FormBuilder]
})
export class FormComponent {
form: FormGroup;

constructor(fb: FormBuilder) {
  this.form = fb.group({
    name: ['', Validators.required],
    email: [''],
    });
 }


}
