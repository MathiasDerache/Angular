import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { VoitureService } from '../../service/voiture.service';
​
@Component({
  selector: 'app-ajouter-voiture',
  templateUrl: './ajouter-voiture.component.html',
  styleUrls: ['./ajouter-voiture.component.css']
})
export class AjouterVoitureComponent implements OnInit {
​
  @Output() addVoitureEventEmitter = new EventEmitter<{marque: string, status: string}>();
​
  inputValue:string = '';
​
  constructor(private voitureService:VoitureService) { }
​
  ngOnInit(): void {
  }
​
  // onAddVoiture(){
  //   this.addVoitureEventEmitter.emit({marque: this.inputValue, status: "Arrêtée"});
  // }
​
  // Utilisée avec la variable locale #monInput (dans le template)
  onAddVoiture2(value:string){
    this.voitureService.addNewVoiture({marque: value, estDemarree: false})
    // this.addVoitureEventEmitter.emit({marque: value, status: "Arrêtée"});
  }
​
  onKeyUp(event:Event){
    this.inputValue = (<HTMLInputElement>event.target).value;
  }
​
}
