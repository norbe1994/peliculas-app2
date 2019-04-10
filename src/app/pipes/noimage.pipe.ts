import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {
  transform(pelicula: any): any {
    const url = 'http://image.tmdb.org/t/p/w500'
    if (pelicula.backdrop_path) {
      return url + pelicula.backdrop_path
    }
    if (pelicula.poster_path) {
      return url + pelicula.poster_path
    }
    return 'assets/img/noimage.jpg'
  }
}
