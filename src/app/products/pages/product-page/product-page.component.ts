import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent {
  private formB = inject(FormBuilder);

  public myForm: FormGroup = this.formB.group({
    name: [
      '',
      [Validators.required, Validators.minLength(6), Validators.email],
    ],
    /* region: ['', [Validators.required]],
    country: ['', [Validators.required]],
    borders: ['', [Validators.required]], */
  });
}
