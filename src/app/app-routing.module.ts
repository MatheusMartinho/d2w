import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresaComponent } from './empresa/empresa.component';
import { HomeComponent } from './home/home.component';
import { DistribuidoresComponent } from './distribuidores/distribuidores.component';

const routes: Routes = [
  { path: 'empresa', component: EmpresaComponent },
  { path: 'home', component: HomeComponent },
  { path: 'distribuidores', component: DistribuidoresComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
