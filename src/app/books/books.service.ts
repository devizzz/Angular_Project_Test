import { Books } from './books.model';
import { Subject } from 'rxjs';
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { PaginationBooks } from './pagination-books.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root"
})
export class BooksService{
  baseUrl : string = environment.baseUrl;
  private booksList: Books[] = [];

  /*
  { bookId: 1, title: "prueba 1", description: "pruba descripción 1", price: 100000, publishDate: new Date(), author: "yo"},
    { bookId: 2, title: "prueba 2", description: "pruba descripción 2", price: 200000, publishDate: new Date(), author: "yo"},
    { bookId: 3, title: "prueba 3", description: "pruba descripción 3", price: 300000, publishDate: new Date(), author: "yo"},
    { bookId: 4, title: "prueba 4", description: "pruba descripción 4", price: 400000, publishDate: new Date(), author: "yo"}
  */

  private bookSubject = new Subject<Books>();
  bookPagination! : PaginationBooks;
  private bookPaginationSubject = new Subject<PaginationBooks>();

  constructor(private http : HttpClient){

  }

  /*getBooks(){
    return this.booksList.slice();
  }*/

  getBooks(booksPerPag: number, currentPag: number, sort: string, sortDirection: string, filterValue: any) {

    const request = {
      pageSize: booksPerPag,
      page: currentPag,
      sort,
      sortDirection,
      filterValue
    }

    this.http.post<PaginationBooks>(this.baseUrl + "api/Libro/Pagination", request)
    .subscribe((data) => {
      this.bookPagination = data;
      this.bookPaginationSubject.next({...this.bookPagination});
    });

    //return this.authorsList.slice();
  }

  getBooksListener(){
    return this.bookPaginationSubject.asObservable();
  }

  saveBook(book: Books){
    this.booksList.push(book);
    this.bookSubject.next(book);
  }
}
