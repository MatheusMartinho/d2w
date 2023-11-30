import { Component } from '@angular/core';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'd2w-website';
  constructor(private languageService: LanguageService) {
    this.languageService.switchLanguage('en'); // Define o idioma padrão
  }
}
