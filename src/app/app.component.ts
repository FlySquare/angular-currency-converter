import {Component, OnInit} from '@angular/core';
import {CurrencyService} from "./services/currency.service";
import {Currency} from "./models/currency";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  baseValue = 0;
  baseCurrency = 'USD';
  convertedValue = 0;
  convertCurrency = 'EUR';
  currencies: Currency[];
  constructor(private currencyService: CurrencyService) {
  }
  ngOnInit() {
    this.currencyService.getCurrencies().subscribe((response: Currency[]) => {
      this.currencies = response;
    });
  }

  eventInput(event: any) {
    this.convert();
  }

  eventSelect(event: any) {
    this.convert();
  }

  convert() {
    if (this.baseCurrency === 'TRY'){
      this.convertedValue = this.baseValue * this.currencies.find(x => x.code === this.convertCurrency).buying;
    }else if (this.baseCurrency === 'USD'){
      this.convertedValue = this.baseValue * this.currencies.find(x => x.code === this.convertCurrency).usdRate;
    }


  }
}
