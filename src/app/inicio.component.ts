import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  lista : Array<string> = [];
  title = '';
  visible = false;

  openMenu = false;

  constructor(){
    setTimeout(() => {
      this.visible = true;
     }, 3000);
  }

  onAgregarItem() {
    this.lista.push(this.title);
    this.title = "";
  };
}
