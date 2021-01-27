import { Component, OnInit } from '@angular/core';
import { Rdv } from './Rdv.model';
import { HttpClient } from '@angular/common/http';
import { RdvService } from './rdv.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'doctolib-angular';

  listeRdvs: Rdv[];

  constructor( private RdvService: RdvService){

  }


  ngOnInit(){
  this.RdvService.searchAllRdvs().subscribe((response) =>{
    console.log(response);
    this.listeRdvs = response.body;
  }, (error) => {
    console.log("Erreur: " + error);
  });
  }
}
