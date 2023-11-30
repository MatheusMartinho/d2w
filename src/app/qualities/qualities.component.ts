import { Component } from '@angular/core';
import { LanguageService } from '../services/language.service';
interface Card {
  title: string;
  description: string;
}

@Component({
  selector: 'app-qualities',
  templateUrl: './qualities.component.html',
  styleUrls: ['./qualities.component.sass']
})

export class QualitiesComponent {
  cards: Card[]=[
    {title:'Melhoria do Fluxo de Ar e Eficiência', description: 'Nossos racks de servidores são projetados com um sistema avançado de gerenciamento de fluxo de ar, garantindo resfriamento ótimo e eficiência energética aprimorada. Isso ajuda a prevenir o superaquecimento e reduz o risco de falhas no hardware, resultando em maior tempo de atividade e economia de custos.'},
    {title:'Medidas de Segurança Aprimoradas', description: 'Com os racks de servidores da D2W, você pode confiar que seus dados valiosos e equipamentos estão protegidos. Nossos racks apresentam mecanismos robustos de travamento, opções de controle de acesso e sistemas de monitoramento integrados para proteger contra acessos não autorizados e ameaças potenciais.'},

    {title:'Design Flexível e Modular', description: 'Nossos racks de servidores oferecem um design modular, permitindo fácil personalização e escalabilidade. Você pode facilmente adicionar ou remover componentes, como prateleiras, soluções de gerenciamento de cabos e unidades de distribuição de energia, para atender às suas necessidades específicas. Essa flexibilidade garante que seu rack possa se adaptar aos avanços tecnológicos futuros e às mudanças nas necessidades do negócio.'},
  ]
  constructor(public languagueService: LanguageService){}
}
