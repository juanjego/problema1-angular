import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-saludar',
  templateUrl: './saludar.component.html',
  styleUrls: ['./saludar.component.css']
})
export class SaludarComponent{
  @Input() nombre:string = 'Marina';
  @Output() saludar: EventEmitter<string> = new EventEmitter<string>();
  
  public nombres: Array<string> = [];
  public nombreLista: string ="Abdi";

  constructor() {
  
  }

  onClick(){
    this.saludar.emit('Hola!, desde el componente hijo');
  }

  onButtonClick(){
    this.nombres.push(this.nombreLista);
    this.nombreLista = '';
    console.log(this.nombres);
  }

}
