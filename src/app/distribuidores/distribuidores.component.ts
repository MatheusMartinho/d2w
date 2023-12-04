import { Component } from '@angular/core';

@Component({
  selector: 'app-distribuidores',
  templateUrl: './distribuidores.component.html',
  styleUrls: ['./distribuidores.component.sass']
})
export class DistribuidoresComponent {
  currentState: any = null;
  stateInfo: { [key: string]: { nome: string, capital: string } } = {
    "BR-AC": { nome: "Acre", capital: "Rio Branco" },
    "BR-AL": { nome: "Alagoas", capital: "Maceió" },
    "BR-AP": { nome: "Amapá", capital: "Macapá" },
    "BR-AM": { nome: "Amazonas", capital: "Manaus" },
    "BR-BA": { nome: "Bahia", capital: "Salvador" },
    "BR-CE": { nome: "Ceará", capital: "Fortaleza" },
    "BR-DF": { nome: "Distrito Federal", capital: "Brasília" },
    "BR-ES": { nome: "Espírito Santo", capital: "Vitória" },
    "BR-GO": { nome: "Goiás", capital: "Goiânia" },
    "BR-MA": { nome: "Maranhão", capital: "São Luís" },
    "BR-MT": { nome: "Mato Grosso", capital: "Cuiabá" },
    "BR-MS": { nome: "Mato Grosso do Sul", capital: "Campo Grande" },
    "BR-MG": { nome: "Minas Gerais", capital: "Belo Horizonte" },
    "BR-PA": { nome: "Pará", capital: "Belém" },
    "BR-PB": { nome: "Paraíba", capital: "João Pessoa" },
    "BR-PR": { nome: "Paraná", capital: "Curitiba" },
    "BR-PE": { nome: "Pernambuco", capital: "Recife" },
    "BR-PI": { nome: "Piauí", capital: "Teresina" },
    "BR-RJ": { nome: "Rio de Janeiro", capital: "Rio de Janeiro" },
    "BR-RN": { nome: "Rio Grande do Norte", capital: "Natal" },
    "BR-RS": { nome: "Rio Grande do Sul", capital: "Porto Alegre" },
    "BR-RO": { nome: "Rondônia", capital: "Porto Velho" },
    "BR-RR": { nome: "Roraima", capital: "Boa Vista" },
    "BR-SC": { nome: "Santa Catarina", capital: "Florianópolis" },
    "BR-SP": { nome: "São Paulo", capital: "São Paulo" },
    "BR-SE": { nome: "Sergipe", capital: "Aracaju" },
    "BR-TO": { nome: "Tocantins", capital: "Palmas" },
  };



  onPathClick(event: Event): void {
    const pathElement = event.target as SVGPathElement;
    const stateId = pathElement.id;
    console.log("Clique no estado:", stateId); // Para debug
    this.currentState = this.stateInfo[stateId];
  }
}
