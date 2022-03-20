import { Subject } from "rxjs";

export class LibrosService{

  librosSubject = new Subject();

  private libros = ['Albegra lineal', 'Algoritmos básico', 'Bases de datos'];

  obtenerLibros(){
    return [...this.libros];
  }

  agregarLibro(nombreLibro: string){
    this.libros.push(nombreLibro);
    this.librosSubject.next(null);
  }

  eliminarLibro(nombreLibro: string){
    this.libros = this.libros.filter(l => l !== nombreLibro);
    this.librosSubject.next(null);
  }
}
