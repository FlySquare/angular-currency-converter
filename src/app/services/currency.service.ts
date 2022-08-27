import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Currency} from "../models/currency";
import {Response} from "../models/response";

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  apiUrl = 'https://ogrencin.net/api/angular-currency-converter/get-currencies';
  constructor(private http: HttpClient) { }

  getCurrencies(): Observable<Currency[]>{
    return this.http.get(this.apiUrl).pipe(
      map((response: Response) => response.data.map((currency: any) => new Currency().prepare(currency)))
    );
  }
}
