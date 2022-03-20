import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BookNewComponent } from './book-new.component';
import { Books } from './books.model';
import { BooksService } from './books.service';
import { Subscription } from 'rxjs';
import { PaginationBooks } from './pagination-books.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit, AfterViewInit, OnDestroy {

  bookData: Books[] = [];
  displayedColumns: string[] = ["bookId", "title", "description", "price", "publishDate", "author"];
  dataSource = new MatTableDataSource<Books>();
  @ViewChild(MatSort) sortMat: MatSort = new MatSort;
  @ViewChild(MatPaginator) pagination!: MatPaginator;

  private bookSubscription? : Subscription;

  totalBooks: number = 0;
  booksPerPag: number = 2;
  pageSelect : number[] = [1,2,5,10];
  currentPag: number = 1;
  sort: string = "titulo";
  sortDirection: string = "asc";
  filterValue= null;

  constructor(private bService: BooksService, private dialog: MatDialog) { }

  eventPagination(event : PageEvent){
    this.booksPerPag = event.pageSize;
    this.currentPag = event.pageIndex + 1;
    this.bService.getBooks(this.booksPerPag, this.currentPag, this.sort, this.sortDirection, this.filterValue);
  }

  makeFilter(filter: any){
    if(filter != null){
      this.dataSource.filter = filter.value;
    }
  }

  ngOnInit(): void {
    //this.bookData = this.bService.getBooks();
    this.bService.getBooks(this.booksPerPag, this.currentPag, this.sort, this.sortDirection, this.filterValue);
    this.bService.getBooksListener().subscribe((pagination : PaginationBooks) => {
      this.dataSource = new MatTableDataSource<Books>(pagination.data);
      this.totalBooks = pagination.totalRows;
    });
    /*this.bookSubscription = this.bService.bookSubject.subscribe(() => {
      this.dataSource.data = this.bService.getBooks();
    });*/
  }

  ngAfterViewInit(): void {
      this.dataSource.sort = this.sortMat;
      this.dataSource.paginator = this.pagination;
  }

  openDialog(){
    this.dialog.open(BookNewComponent, { width: "350px" });
  }

  ngOnDestroy(): void {
      this.bookSubscription?.unsubscribe();
  }

}
