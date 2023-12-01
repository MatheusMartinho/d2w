import { Component } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-customersay',
  templateUrl: './customersay.component.html',
  styleUrls: ['./customersay.component.sass']
})
export class CustomersayComponent {
  constructor(public languagueService: LanguageService){}
}
