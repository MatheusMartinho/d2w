import { Component } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.sass']
})
export class EmpresaComponent {
  constructor(public languageService:LanguageService){}
}
