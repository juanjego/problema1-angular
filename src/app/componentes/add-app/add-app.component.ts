import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-app',
  templateUrl: './add-app.component.html',
  styleUrls: ['./add-app.component.css']
})
export class AddAppComponent {

  public nombres: Array<string> = [];
  public id: string ="";
  public nombreLista: string ="";
  public genero: string ="";
  public fechanac: string ="";
  public registrocompleto: string="";
  public valido: boolean = true;
  public mensaje: string ="";

  constructor() { }

    
  onButtonClick(){
    this.mensaje="";
      if(this.id.length<=0){
      this.valido= false;
      this.mensaje+="Rellena el campo de Id, ";
      }else{
        this.valido=true;
        this.mensaje+="";
      }
      if(this.nombreLista.length<=0){
      this.valido= false;
      this.mensaje+="Rellena el campo de nombre, ";
      }else{
        this.mensaje+="";
      }
      if(this.genero.length<=0){
      this.valido= false;
      this.mensaje+="Rellena el campo de genero, ";
      }else{
        this.mensaje+="";
      }
      if(this.fechanac.length<=0){
      this.valido= false;
      this.mensaje+=" Rellena el campo de fecha";
      
      }else{
        this.mensaje+="";
      }

    if (this.valido) {
    this.registrocompleto = this.id +", "+ this.nombreLista+", "+ this.genero+", "+this.fechanac;
    this.nombres.push(this.registrocompleto);
    this.id="";
    this.nombreLista="";
    this.genero="";
    this.fechanac="";
    console.log(this.nombres);    
    }else{
      console.log(this.mensaje);
      this.valido=true;
      
    }
    
  }
}
