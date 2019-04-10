import { Component, OnInit } from '@angular/core'
import { PeliculasService } from 'src/app/providers/peliculas.service'

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: []
})
export class BuscarComponent implements OnInit {
  public termino: string
  constructor(public _ps: PeliculasService) {}

  ngOnInit() {}

  buscar() {
    if (this.termino.length === 0) {
      return
    }
    this._ps.buscarPelicula(this.termino).subscribe()
  }
}
