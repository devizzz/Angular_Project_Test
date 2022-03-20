import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { InicioComponent } from './inicio.component';
import { UsuarioComponent } from './usuario.component';
import { LibrosComponent } from './libros/libros.component';
import { LibroComponent } from './libro/libro.component';
import { FormsModule } from '@angular/forms';
import { LibrosService } from "./services/libros.service";
import { HomeComponent } from "./home/home.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { RegistrarComponent } from './security/registrar/registrar.component';
import { LoginComponent } from './security/login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BarComponent } from './navigation/bar/bar.component';
import { MenuListComponent } from './navigation/menu-list/menu-list.component';
import { SecurityService } from './security/Security.service';
import { BooksComponent } from './books/books.component';
import { BookNewComponent } from './books/book-new.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { AuthorsComponent } from './authors/authors.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    InicioComponent,
    UsuarioComponent,
    LibrosComponent,
    LibroComponent,
    HomeComponent,
    RegistrarComponent,
    LoginComponent,
    BarComponent,
    MenuListComponent,
    BooksComponent,
    BookNewComponent,
    AuthorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [
    LibrosService,
    SecurityService,
    {provide: MAT_DATE_LOCALE, useValue: 'es-ES'}
  ],
  bootstrap: [InicioComponent],
  entryComponents: [BookNewComponent]
})
export class AppModule { }
