import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.css'
})
export class QuestionsComponent {
  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    tell: new FormControl('', [Validators.required, this.armenianPhoneValidator()]),
    question: new FormControl('')
  });
  armenianPhoneValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      let phoneRegex = /^(\+374|0)(10|11|33|41|43|44|55|77|81|82|85|86|87|88|89|91|93|94|95|96|97|98|99)\d{6}$/;
      let isValid = phoneRegex.test(control.value);
      return isValid ? null : { armenianPhone: true };
    };
  }
  // submit(){
  //   this.form.disable()
  // }
}
