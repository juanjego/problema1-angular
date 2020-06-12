import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-saludar',
  templateUrl: './saludar.component.html',
  styleUrls: ['./saludar.component.css']
})
export class SaludarComponent{
  @Input() nombre:string;
  
  constructor() {
  
  }

}
