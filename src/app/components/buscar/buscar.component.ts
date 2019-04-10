import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: []
})
export class BuscarComponent implements OnInit {
  public termino: string
  constructor() {}

  ngOnInit() {}

  buscar() {
    console.log(this.termino)
  }
}
