import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CoinMarketCapService } from '../../services/coin-market-cap.service';
import { CategoryDataCoinsInterface, CategoryInterface } from '../../types/category.interface';
import { map } from 'rxjs/operators';

import { registerLocaleData } from '@angular/common';
import locale from '@angular/common/locales/de';
registerLocaleData(locale, 'nl');

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  cryptoData$!: Observable<CategoryDataCoinsInterface[]>;
  cryptoData!: CategoryInterface;
  displayedColumns: string[] = ['#', 'name', 'price', '24h', '7d', 'market_cap', 'volume', 'circulating_supply'];

  constructor(private cmcService: CoinMarketCapService) {}

  ngOnInit() {
    this.cryptoData$ = this.cmcService.getCryptoPrice().pipe(map((data: CategoryInterface) => data.data.coins));
  }
}
