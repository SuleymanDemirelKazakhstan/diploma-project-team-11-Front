import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent {
  slug$!: Observable<Params>;

  constructor(private activatedRouter: ActivatedRoute) {
    this.slug$ = activatedRouter.params;
  }
}
