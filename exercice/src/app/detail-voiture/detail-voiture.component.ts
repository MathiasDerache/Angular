import { Component, Input, OnInit } from '@angular/core';
import { VoitureService } from '../service/voiture.service';
​
@Component({
  selector: 'app-detail-voiture',
  templateUrl: './detail-voiture.component.html',
  styleUrls: ['./detail-voiture.component.css']
})
export class DetailVoitureComponent implements OnInit {
​
  voiture: {marque: string, estDemarree: boolean};
​
  constructor(private voitureService: VoitureService) {
    this.voitureService.selectVoiture.subscribe(marque => {
    this.voiture = this.voitureService.getDetailVoiture(marque);
    })
   }
​
  ngOnInit(): void {
  }
​
}
