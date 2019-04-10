import { Component, OnInit } from '@angular/core'
import { PeliculasService } from 'src/app/providers/peliculas.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  public cartelera: any[] = []
  constructor(public _ps: PeliculasService) {
    this._ps.getCartelera().subscribe((data: any) => {
      this.cartelera = data.results
    })
  }

  ngOnInit() {}
}
