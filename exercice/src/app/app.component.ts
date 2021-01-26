import { Component } from '@angular/core';
​
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
​

  laVoitureSelectionnee: {marque: string, estDemarree: boolean};
​
  onReceivedVoiture(voitureRecue: {marque: string, estDemarree: boolean}){
    this.laVoitureSelectionnee= voitureRecue;
  }
}
