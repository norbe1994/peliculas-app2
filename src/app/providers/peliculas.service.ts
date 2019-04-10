import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'

@Injectable()
export class PeliculasService {
  private apikey: string = '4fa158e44a3f1a9dd31e58b7f97449c8'
  private urlMoviedb: string = 'https://api.themoviedb.org/3'

  constructor(private http: HttpClient) {}

  getCartelera() {
    let desde = new Date()
    let hasta = new Date()
    // mover una semana al futuro
    hasta.setDate(hasta.getDate() + 7)
    let desdeString = `${desde.getFullYear()}-${desde.getMonth()}-${desde.getDate()}`
    let hastaString = `${hasta.getFullYear()}-${hasta.getMonth()}-${hasta.getDate()}`
    let url = `${
      this.urlMoviedb
    }/discover/movie?primary_release_date.gte=${desdeString}&primary_release_date.lte=${hastaString}&api_key=${
      this.apikey
    }&language=es&callback=JSONP_CALLBACK`

    return this.http.jsonp(url, '').pipe(map(res => res))
  }

  getPopulares() {
    let url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${
      this.apikey
    }&language=es&callback=JSONP_CALLBACK`

    return this.http.jsonp(url, '').pipe(map(res => res))
  }

  buscarPelicula(texto: string) {
    let url = `${this.urlMoviedb}/search/movie?query=${texto}&sort_by=popularity.desc&api_key=${
      this.apikey
    }&language=es&callback=JSONP_CALLBACK`

    return this.http.jsonp(url, '').pipe(map(res => res))
  }
}
