import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'problema1-angular';
  name='Juan Jesus';

  onSaludar(mensaje){
console.log(mensaje);
  }
}
