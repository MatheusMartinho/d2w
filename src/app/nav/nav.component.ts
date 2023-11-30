import { Component } from '@angular/core';
import { LanguageService } from '../services/language.service'; // Ajuste o caminho conforme necessário


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent {
  constructor(public languageService: LanguageService) {}
}
