import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { CurrencyComponent } from './components/currency/cyrrency.component';
import { CurrenciesComponent } from './currencies.component';

const routes: Routes = [
  {
    path: '',
    component: CurrenciesComponent
  },
  {
    path: ':slug',
    component: CurrencyComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrenciesRoutingModule {}
