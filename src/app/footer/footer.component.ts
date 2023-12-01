import { Component } from '@angular/core';
import { LanguageService } from '../services/language.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent {
  constructor(public languagueService: LanguageService){}
}
