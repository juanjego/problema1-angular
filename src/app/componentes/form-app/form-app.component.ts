import { Component, OnInit } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { from } from 'rxjs';

@Component({
  selector: 'app-form-app',
  templateUrl: './form-app.component.html',
  styleUrls: ['./form-app.component.css']
})
export class FormAppComponent{

  public registro: Array<string> = [];
  public cad: string="";
  public cupon: string="";
  public email: string="";
  public direccion: string="";
  public estado: string="";
  public cp: string="";
  public telefono: string="";
  public org: string="";
  public registroNuevo: string="";
  public valido: boolean = true;
  public mensaje: string ="";

  miFormulario: FormGroup;
  
  
  constructor(
    public fb: FormBuilder
  ) {
    this.miFormulario = this.fb.group({
      opc: ['', [Validators.required]],
      cupon: ['', [Validators.required,Validators.minLength(10)]],
      organization: ['', [Validators.required,Validators.minLength(15)]],
      email: ['', [Validators.required, Validators.email]],
      dir: ['', [Validators.required,Validators.minLength(20)]],
      state: ['', [Validators.required,Validators.minLength(5)]],
      codP: ['', [Validators.required,Validators.minLength(5)]],
      telefono: ['', [Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      
    });
  }

  saveData(){
    alert(JSON.stringify(this.miFormulario.value));
  }
  enviar(values){
    console.log(values);
  }




  onSubmit(){
    this.registroNuevo = this.cad +", "+ this.cupon +", "+ this.email +", "+ this.direccion +", "+this.estado +", "+ this.cp+", "+ 
    this.telefono+", "+ this.org;
    this.registro.push(this.registroNuevo);
    console.log(this.registro);

    if(this.cad.length<=0){
      this.valido= false;
      this.mensaje+="Rellena el campo de nombre, ";
      }else{
        this.valido=true;
        this.mensaje+="";
      }

  }

}
