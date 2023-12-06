import { Component } from '@angular/core';

@Component({
  selector: 'app-distribuidores',
  templateUrl: './distribuidores.component.html',
  styleUrls: ['./distribuidores.component.sass']
})
export class DistribuidoresComponent {
  currentState: any = null;
  stateInfo: { [key: string]: { nome: string, capital: string, description: string, img1: string, url: string} } = {
    // "BR-AC": { nome: "Acre", capital: "Rio Branco", description: "Clique nos demais estados do mapa para mais opções.",img1: ""},
    "BR-AL": { nome: "Alagoas", capital: "Maceió", description: "Clique nos demais estados do mapa para mais opções.",img1: "",url:"https://www.etelmaster.com.br"},
    // "BR-AP": { nome: "Amapá", capital: "Macapá" ,description: "Clique nos demais estados do mapa para mais opções.",img1: ""},
    // "BR-AM": { nome: "Amazonas", capital: "Manaus" ,description: "Clique nos demais estados do mapa para mais opções.",img1: ""},
    "BR-BA": { nome: "Bahia", capital: "/assets/images/logos/pontoDaRedeLogo.png" ,description: "Clique nos demais estados do mapa para mais opções.",img1: "",url:"https://pontodarede.com.br"},
    "BR-CE": { nome: "Ceará", capital: "Fortaleza" ,description: "Clique nos demais estados do mapa para mais opções.",img1: "",url:"https://www.etelmaster.com.br"},
    "BR-DF": { nome: "Distrito Federal", capital: "/assets/images/logos/logo-horus.png" ,description: "Clique nos demais estados do mapa para mais opções.",img1: "/assets/images/horus-website.png",url:"https://horus.com.br"},
    "BR-ES": { nome: "Espírito Santo", capital: "Vitória" ,description: "Clique nos demais estados do mapa para mais opções.",img1: "",url:"https://www.etelmaster.com.br"},
    "BR-GO": { nome: "Goiás", capital: "/assets/images/logos/logo-horus.png" ,description: "Clique nos demais estados do mapa para mais opções.",img1: "/assets/images/horus-website.png",url:"https://horus.com.br"},
    // "BR-MA": { nome: "Maranhão", capital: "São Luís" ,description: "Clique nos demais estados do mapa para mais opções.",img1: ""},
    // "BR-MT": { nome: "Mato Grosso", capital: "Cuiabá" ,description: "Clique nos demais estados do mapa para mais opções.",img1: ""},
    // "BR-MS": { nome: "Mato Grosso do Sul", capital: "Campo Grande" ,description: "Clique nos demais estados do mapa para mais opções.",img1: ""},
    // "BR-MG": { nome: "Minas Gerais", capital: "Belo Horizonte" ,description: "Clique nos demais estados do mapa para mais opções.",img1: ""},
    // "BR-PA": { nome: "Pará", capital: "Belém" ,description: "Clique nos demais estados do mapa para mais opções.",img1: ""},
    "BR-PB": { nome: "Paraíba", capital: "João Pessoa" ,description: "Clique nos demais estados do mapa para mais opções.",img1: "",url:"https://www.etelmaster.com.br"},
    // "BR-PR": { nome: "Paraná", capital: "Curitiba" ,description: "Clique nos demais estados do mapa para mais opções.",img1: ""},
    "BR-PE": { nome: "Pernambuco", capital: "Recife", description: "Clique nos demais estados do mapa para mais opções.",img1: "",url:"https://www.etelmaster.com.br"},
    "BR-PI": { nome: "Piauí", capital: "Teresina" ,description: "Clique nos demais estados do mapa para mais opções.",img1: "",url:"https://www.etelmaster.com.br"},
    "BR-RJ": { nome: "Rio de Janeiro", capital: "/assets/images/logos/prontoRedesLogo.png" ,description: "Clique nos demais estados do mapa para mais opções.",img1: "/assets/images/prontoWebsite.png",url:"http://www.prontoredes.com.br/index.html"},
    "BR-RN": { nome: "Rio Grande do Norte", capital: "Natal" ,description: "Clique nos demais estados do mapa para mais opções.",img1: "",url:"https://www.etelmaster.com.br"},
    // "BR-RS": { nome: "Rio Grande do Sul", capital: "Porto Alegre" ,description: "Clique nos demais estados do mapa para mais opções.",img1: ""},
    // "BR-RO": { nome: "Rondônia", capital: "Porto Velho" ,description: "Clique nos demais estados do mapa para mais opções.",img1: ""},
    // "BR-RR": { nome: "Roraima", capital: "Boa Vista" ,description: "Clique nos demais estados do mapa para mais opções.",img1: ""},
    // "BR-SC": { nome: "Santa Catarina", capital: "Florianópolis" ,description: "Clique nos demais estados do mapa para mais opções.",img1: ""},
    "BR-SP": { nome: "São Paulo", capital: "/assets/images/logos/etelMasterLogo.jpg" ,description: "Clique nos demais estados do mapa para mais opções.",img1: "/assets/images/etelWebsite.png",url:"https://www.etelmaster.com.br"},
    "BR-SE": { nome: " Sergipe", capital: "Aracaju" ,description: "Clique nos demais estados do mapa para mais opções.",img1: "",url:"https://www.etelmaster.com.br"},
    "BR-TO": { nome: "Tocantins", capital: "/assets/images/logos/logo-horus.png" ,description: "Clique nos demais estados do mapa para mais opções." ,img1: "/assets/images/horus-website.png",url:"https://horus.com.br"},
  };



  onPathClick(event: Event): void {
    const pathElement = event.target as SVGPathElement;
    const stateId = pathElement.id;
    console.log("Clique no estado:", stateId); // Para debug
    this.currentState = this.stateInfo[stateId];
  }
}
