import { Injectable } from "@angular/core";
import { Author } from "./author.model";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthorsService {
  baseUrl : string = environment.baseUrl;
  private authorsList: Author[] = [];

  /*
  { authorId: 1, name: "david", lastName: "cordoba", academicDegree: "Ingeniero de software" },
  { authorId: 2, name: "lorenzo", lastName: "lamas", academicDegree: "Matematico" },
  { authorId: 3, name: "Laura", lastName: "mozeda", academicDegree: "Ciencias sociales" },
  { authorId: 4, name: "Pedro", lastName: "Mejia", academicDegree: "Ingeniero de producción" },
  { authorId: 5, name: "ana", lastName: "corza", academicDegree: "Medica" }
  */

  private authorsSubject = new Subject<Author[]>();

  constructor(private http : HttpClient){

  }

  getAuthors() {

    this.http.get<Author[]>(this.baseUrl + "api/LibreriaAutor")
    .subscribe((data) => {
      this.authorsList = data;
      this.authorsSubject.next([...this.authorsList]);
    });

    //return this.authorsList.slice();
  }

  getAuthorsListener(){
    return this.authorsSubject.asObservable();
  }

}
