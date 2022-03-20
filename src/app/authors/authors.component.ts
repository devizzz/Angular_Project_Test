import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Author } from './author.model';
import { AuthorsService } from './authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit, OnDestroy {
  displayedColumns = ['name', 'lastName', 'academicDegree']
  dataSource = new MatTableDataSource<Author>();
  private authorsSubscription! : Subscription;

  constructor(private aService: AuthorsService) { }

  ngOnInit(): void {
    this.aService.getAuthors();
    this.authorsSubscription = this.aService.getAuthorsListener().subscribe((authors: Author[]) => {
      this.dataSource.data = authors;
    });
  }

  ngOnDestroy(): void {
      this.authorsSubscription.unsubscribe();
  }

}
