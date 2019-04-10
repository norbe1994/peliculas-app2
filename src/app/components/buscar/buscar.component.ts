import { Component, OnInit } from '@angular/core'
import { PeliculasService } from 'src/app/providers/peliculas.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: []
})
export class BuscarComponent implements OnInit {
  public termino: string

  constructor(public _ps: PeliculasService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      if (params['termino']) {
        this.termino = params['termino']
        this.buscar()
      }
    })
  }

  ngOnInit() {}

  buscar() {
    if (this.termino.length === 0) {
      return
    }
    this._ps.buscarPelicula(this.termino).subscribe()
  }
}
