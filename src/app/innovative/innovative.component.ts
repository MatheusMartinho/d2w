import { Component } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-innovative',
  templateUrl: './innovative.component.html',
  styleUrls: ['./innovative.component.sass']
})
export class InnovativeComponent {
  constructor(public languagueService: LanguageService){}
}
