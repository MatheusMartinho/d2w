import { Component } from '@angular/core';

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
    {title:'Improved Airflow and Efficiency', description: 'Our server racks are designed with advanced airflow management system, ensuring optimal cooling and improved energy efficiency. This helps to prevent overheating and reduces the risk of hardware failure, resulting in increased uptime and cost savings.'},
    {title:'Enhanced Security Measures', description: 'With D2W server racks, you can trust that your valuable data and equipment are protected. Our racks features robust locking mechanisms, access control options, and integrated monitoring systems to safeguard against unauthorized access and pottencial threats.'},

    {title:'Flexible and Modular Design', description: 'Our server racks offer a modular design, allowing for easy customization and scalabillity. You can easily add or remove components, such as shelves, cable management solutions, and power distribution units, to meet your specific requirements. This flexibility ensures that your rack can adapt to future technology advancementsand changing business needs.'},
  ]
}
