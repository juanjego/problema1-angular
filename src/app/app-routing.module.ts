import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddAppComponent } from './componentes/add-app/add-app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { SaludarComponent } from './componentes/saludar/saludar.component';
import { FormAppComponent } from './componentes/form-app/form-app.component';


const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'addapp', component: AddAppComponent},
  {path: 'saludar', component: SaludarComponent},
  {path: 'form', component: FormAppComponent},
  {path :'**', pathMatch: 'full', redirectTo: 'inicio'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
