import { Component, OnInit } from '@angular/core'
import { PeliculasService } from 'src/app/providers/peliculas.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  public cartelera: any[] = []
  public populares: any[] = []
  public popularesNinos: any[] = []
  constructor(public _ps: PeliculasService) {
    this._ps.getCartelera().subscribe(data => {
      this.cartelera = data
    })

    this._ps.getPopulares().subscribe(data => {
      this.populares = data
    })

    this._ps.getPopularesNinos().subscribe(data => {
      this.popularesNinos = data
    })
  }

  ngOnInit() {}
}
