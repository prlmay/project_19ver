import { Component } from '@angular/core';
import { FormBuilder, FormGroup, MaxLengthValidator, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  form!: FormGroup
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.pattern(/^[A-Za-z]{2,6}$/)]],
      telephone: ['', [Validators.pattern(/^\+[374][0-9]{6}$/)]],
      questions: ['', ((MaxLengthValidator: 50)=>{})]
    })
  }
  submit(){
    this.form.disable()
  }
}
