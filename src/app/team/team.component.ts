import { Component } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.sass']
})

export class TeamComponent {
  cards = [
    {name: 'John', profession: 'Data Center Specialist', description: 'John is a highly skilled professional with extensive experience in data center managemente'},
    {name: 'John mayer', profession: 'Data Center Specialist', description: 'John is a highly skilled professional with extensive experience in data center managemente'},
    {name: 'John', profession: 'Data Center Specialist', description: 'John is a highly skilled professional with extensive experience in data center managemente'},
    {name: 'John', profession: 'Data Center Specialist', description: 'John is a highly skilled professional with extensive experience in data center managemente'},
    {name: 'John', profession: 'Data Center Specialist', description: 'John is a highly skilled professional with extensive experience in data center managemente'},
    {name: 'John', profession: 'Data Center Specialist', description: 'John is a highly skilled professional with extensive experience in data center managemente'},
    {name: 'John', profession: 'Data Center Specialist', description: 'John is a highly skilled professional with extensive experience in data center managemente'},
    {name: 'John', profession: 'Data Center Specialist', description: 'John is a highly skilled professional with extensive experience in data center managemente'},
  ]
  constructor(public languagueService: LanguageService){}
}
