import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
​
import { AppComponent } from './app.component';
import { ListeVoituresComponent } from './liste-voitures/liste-voitures.component';
import { DetailVoitureComponent } from './detail-voiture/detail-voiture.component';
import { VoitureComponent } from './liste-voitures/voiture/voiture.component';
import { AjouterVoitureComponent } from './liste-voitures/ajouter-voiture/ajouter-voiture.component';
import { VoitureService } from './service/voiture.service';
import { ColorfullDirective } from './directives/colorfull.directive';
​
​
@NgModule({
  declarations: [
    AppComponent,
    ListeVoituresComponent,
    DetailVoitureComponent,
    VoitureComponent,
    AjouterVoitureComponent,
    ColorfullDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [ VoitureService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
