import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrenciesComponent } from './currencies.component';
import { CurrencyComponent } from './components/currency/cyrrency.component';
import { CurrenciesRoutingModule } from './currencies-routing.module';

@NgModule({
  imports: [CommonModule, CurrenciesRoutingModule],
  declarations: [CurrenciesComponent, CurrencyComponent]
})
export class CurrenciesModule {}
