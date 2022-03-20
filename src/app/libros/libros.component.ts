import { Component, OnInit, OnDestroy } from "@angular/core";
import { LibrosService } from "../services/libros.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
})
export class LibrosComponent implements OnInit, OnDestroy {

  libros: string[] = [];

  constructor(private LibrosService: LibrosService) {}

  private librosSubscription : Subscription = new Subscription();

  EliminarLibro(libro: string) {
    this.LibrosService.eliminarLibro(libro);
  }

  GuardarLibro(f: any) {
    if (f.valid) {
      this.LibrosService.agregarLibro(f.value.nombreLibro);
    }
  }

  obtenerLibros() {
    this.libros = this.LibrosService.obtenerLibros();
  }

  ngOnInit(): void {
    this.obtenerLibros();
    this.librosSubscription = this.LibrosService.librosSubject.subscribe(() => {
      this.obtenerLibros();
    });
  }

  ngOnDestroy(): void {
      this.librosSubscription.unsubscribe();
  }
}
