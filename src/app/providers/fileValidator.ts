import { FormControl, ValidatorFn } from '@angular/forms';

export function FileValidator(control: FormControl): ValidatorFn | null {
  const file = control.value;

  return null;
}
