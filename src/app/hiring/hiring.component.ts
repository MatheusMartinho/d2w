import { Component } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-hiring',
  templateUrl: './hiring.component.html',
  styleUrls: ['./hiring.component.sass']
})
export class HiringComponent {
  constructor(public languagueService: LanguageService){}
}
