import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { VoitureService } from 'src/app/service/voiture.service';
​
@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.css']
})
export class VoitureComponent implements OnInit {
​
  @Output() selectVoiture = new EventEmitter<{marque: string, estDemarree: boolean}>()
  @Input() laVoiture:{marque:string, estDemarree:boolean};
  constructor(private voitureService: VoitureService) { }
​
  ngOnInit(): void {
  }
​
  demarrerArreter(){
        if(this.laVoiture.estDemarree){
          this.laVoiture.estDemarree = false;
        } else if(!this.laVoiture.estDemarree){
          this.laVoiture.estDemarree = true;
        }
  }
​
  // onClickVoiture(voitureSelectionnee: {marque:string, estDemarree:boolean}){
  //   this.selectVoiture.emit(voitureSelectionnee);
  // }
​
  onSelectedVoiture(marque: string){
    this.voitureService.emitVoitureSelected(marque);
  }
}
