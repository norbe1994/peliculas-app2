import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppRoutingModule } from './app-routing.module'
// componentes
import { AppComponent } from './app.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { HomeComponent } from './components/home/home.component'
import { PeliculaComponent } from './components/pelicula/pelicula.component'
// servicios
import { PeliculasService } from './providers/peliculas.service';
import { BuscarComponent } from './components/buscar/buscar.component'

@NgModule({
  declarations: [AppComponent, NavbarComponent, HomeComponent, PeliculaComponent, BuscarComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule {}
