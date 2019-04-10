import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {
  transform(pelicula: any): any {
    if (pelicula.backdrop_path) {
      return pelicula.backdrop_path
    }
    if (pelicula.poster_path) {
      return pelicula.poster_path
    }
    return 'assets/img/noimage.jpg'
  }
}
