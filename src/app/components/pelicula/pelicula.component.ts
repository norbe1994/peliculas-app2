import { Component, OnInit } from '@angular/core'
import { PeliculasService } from 'src/app/providers/peliculas.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: []
})
export class PeliculaComponent implements OnInit {
  public pelicula: any
  constructor(public _ps: PeliculasService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this._ps.getPelicula(params['id']).subscribe(data => {
        this.pelicula = data
      })
    })
  }

  ngOnInit() {}
}
