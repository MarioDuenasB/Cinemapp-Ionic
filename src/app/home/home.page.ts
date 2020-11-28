import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../api/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  peliculas = []; /*[
    {
      titulo: "Star Wars: Episodio I - La amenaza fantasma", 
      anio: 1999,
      director: "George Lucas",
      imagen: "https://diariointegral.cl/wp-content/uploads/2018/03/ailph4q-800x445.jpg"
    },
    {
      titulo: "Star Wars: Episodio II - El ataque de los clones", 
      anio: 2022,
      director: "George Lucas",
      imagen: "https://diariointegral.cl/wp-content/uploads/2018/03/ep2_ia_69221_a-1536x864-930323550663-800x445.jpg"
    }
  ];*/
  
  constructor(private peliculasService: PeliculasService) {}

  ngOnInit() {
    this.peliculasService.peliculas.subscribe(peliculas => {
      this.peliculas = peliculas;
    });
    //this.peliculasService.getPeliculas();
  }

}
