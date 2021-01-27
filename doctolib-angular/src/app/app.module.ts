import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RechercheComponent } from './recherche/recherche.component';
import { RdvService } from './rdv.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RechercheComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [RdvService],
  bootstrap: [AppComponent]
})
export class AppModule { }
