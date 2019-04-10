import { Component } from '@angular/core'
import { PeliculasService } from 'src/app/providers/peliculas.service'
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common'

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: []
})
export class PeliculaComponent {
  public pelicula: any
  constructor(
    public _ps: PeliculasService,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) {
    this.activatedRoute.params.subscribe(params => {
      this._ps.getPelicula(params['id']).subscribe(data => {
        this.pelicula = data
        console.log(data)
      })
    })
  }

  irAtras() {
    this.location.back()
  }

  irAPagina() {
    if (this.pelicula.homepage) {
      window.open(this.pelicula.homepage, '_blank')
    }
  }
}
