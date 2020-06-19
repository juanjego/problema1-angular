import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-saludar',
  templateUrl: './saludar.component.html',
  styleUrls: ['./saludar.component.css']
})
export class SaludarComponent{
  @Input() nombre:string = 'Mariana';
  @Output() saludar: EventEmitter<string> = new EventEmitter<string>();
  
  public nombres: Array<string> = [];
  public nombreLista: string ="";

  constructor() {
  }

  onClick(){
    this.saludar.emit('¡Hola!, desde el componente hijo');
  }

  onButtonClick(){
    this.nombres.push(this.nombreLista);
    this.nombreLista="";
    console.log(this.nombres);
    //this.nombreLista=((document.getElementById("nombreLista") as HTMLInputElement).value);
    //console.log(":::::" +this.nombreLista);
    //this.nombres.push(this.nombreLista);
    //this.nombreLista= "";
    //((document.getElementById("nombreLista") as HTMLInputElement).value)="";
    //console.log(this.nombres);
    
  }

}
