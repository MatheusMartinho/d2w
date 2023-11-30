import { Component } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-installation',
  templateUrl: './installation.component.html',
  styleUrls: ['./installation.component.sass']
})

export class InstallationComponent {
  constructor(public languagueService: LanguageService){}
}
