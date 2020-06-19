import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaludarComponent } from './componentes/saludar/saludar.component';
import { AddAppComponent } from './componentes/add-app/add-app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { FormAppComponent } from './componentes/form-app/form-app.component';
;

@NgModule({
  declarations: [
    AppComponent,
    SaludarComponent,
    AddAppComponent,
    NavbarComponent,
    InicioComponent,
    FormAppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
