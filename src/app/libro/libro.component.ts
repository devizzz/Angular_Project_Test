import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent {
  @Input() tituloLibro: string;
  @Output() libroCliked = new EventEmitter();

  constructor() {
    this.tituloLibro = "";
  }

  onClicked(){
    this.libroCliked.emit();
  }
}
