import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { MatOption } from "@angular/material/core";
import { MatDatepicker } from "@angular/material/datepicker";
import { MatDialog } from "@angular/material/dialog";
import { MatSelectChange } from "@angular/material/select";
import { Author } from "../authors/author.model";
import { AuthorsService } from "../authors/authors.service";
import { Books } from "./books.model";
import { BooksService } from "./books.service";

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html'
})
export class BookNewComponent implements OnInit {
  selectAuthor: string = "";
  selectAuthorText: string = "";
  publishDate: string = "";
  authors: Author[] = [];
  @ViewChild(MatDatepicker) picker!: MatDatepicker<Date>;

  constructor(private bkService: BooksService, private dialogRef: MatDialog, private aService : AuthorsService) { }

  ngOnInit(): void {
    //this.authors = this.aService.getAuthors();
  }

  saveBook(f: NgForm) {
    if (f.valid) {
      const book: Books = {
        bookId: 1,
        title: f.value.title,
        description: f.value.description,
        price: f.value.price,
        author: this.selectAuthorText,
        publishDate: new Date(this.publishDate)
      };
      this.bkService.saveBook(book);
      this.dialogRef.closeAll();
    }

  }

  selected(event: MatSelectChange) {
    this.selectAuthorText = (event.source.selected as MatOption).viewValue;
  }
}
