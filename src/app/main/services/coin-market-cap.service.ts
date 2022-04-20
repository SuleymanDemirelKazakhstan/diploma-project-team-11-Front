import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryInterface } from '../types/category.interface';

@Injectable()
export class CoinMarketCapService {
  constructor(private http: HttpClient) {}

  getCryptoPrice(): Observable<CategoryInterface> {
    const url = 'http://localhost:8090/category';
    return this.http.get<CategoryInterface>(url);
  }
}
