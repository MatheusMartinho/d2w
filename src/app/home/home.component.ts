import { Component } from '@angular/core';
import { LanguageService } from '../services/language.service'; // Ajuste o caminho conforme necessário

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  constructor(public languageService: LanguageService) {}
}
