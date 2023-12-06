import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresaComponent } from './empresa/empresa.component';
import { HomeComponent } from './home/home.component';
import { DistribuidoresComponent } from './distribuidores/distribuidores.component';
import { RacksDataCenterComponent } from './racks-data-center/racks-data-center.component';
import { W35Component } from './w35/w35.component';

const routes: Routes = [
  { path: 'empresa', component: EmpresaComponent },
  { path: 'home', component: HomeComponent },
  { path: 'distribuidores', component: DistribuidoresComponent },
  { path: 'racks-data-center', component: RacksDataCenterComponent},
  { path: 'w35', component: W35Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
