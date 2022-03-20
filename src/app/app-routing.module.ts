import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorsComponent } from './authors/authors.component';
import { BooksComponent } from './books/books.component';
import { HomeComponent } from './home/home.component';
import { LibrosComponent } from './libros/libros.component';
import { LoginComponent } from './security/login/login.component';
import { RegistrarComponent } from './security/registrar/registrar.component';
import { SecurityRouter } from './security/security.router';

const routes: Routes = [
  { path: "", component: HomeComponent, canActivate: [SecurityRouter] },
  //{ path: "libros", component: LibrosComponent },
  { path: "login", component: LoginComponent },
  { path: "registrar", component: RegistrarComponent },
  { path: "libros", component: BooksComponent },
  { path: "autores", component: AuthorsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [SecurityRouter]
})
export class AppRoutingModule { }
