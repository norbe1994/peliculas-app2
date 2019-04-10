import { Component } from '@angular/core'
import { PeliculasService } from 'src/app/providers/peliculas.service'
import { ActivatedRoute, Router } from '@angular/router'
import { Location } from '@angular/common'

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: []
})
export class PeliculaComponent {
  public pelicula: any
  private termino: string

  constructor(
    public _ps: PeliculasService,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe(params => {
      if (params['termino']) {
        this.termino = params['termino']
      }
      this._ps.getPelicula(params['id']).subscribe(data => {
        this.pelicula = data
        console.log(data)
      })
    })
  }

  irAtras() {
    if (this.termino) {
      this.router.navigate(['/buscar', this.termino])
    } else {
      this.location.back()
    }
  }

  irAPagina() {
    if (this.pelicula.homepage) {
      window.open(this.pelicula.homepage, '_blank')
    }
  }
}
