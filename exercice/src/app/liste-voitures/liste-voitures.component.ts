import { Component, EventEmitter, Output } from "@angular/core";
import { VoitureService } from "../service/voiture.service";
​
​
@Component({
  selector: "app-liste-voitures",
  templateUrl: "./liste-voitures.component.html"
})
export class ListeVoituresComponent {
​
  @Output() selectVoiture = new EventEmitter<{marque: string, estDemarree: boolean}>();
  voitures: {marque: string, estDemarree: boolean}[] = [];
​
  constructor(private voitureService: VoitureService){
    this.voitures = this.voitureService.getAllVoitures()
  }
​
  // addReceivedVoiture(voiture: {marque: string, estDemarree: boolean}){
  //   this.voitures.push(voiture)
  // }
​
  // onReceivedVoiture(voitureRecue: {marque: string, estDemarree: boolean}){
  //   this.selectVoiture.emit(voitureRecue);
  // }
​
}
