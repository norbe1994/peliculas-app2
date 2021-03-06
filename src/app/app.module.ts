import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppRoutingModule } from './app-routing.module'
import { FormsModule } from '@angular/forms'
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http'
// componentes
import { AppComponent } from './app.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { HomeComponent } from './components/home/home.component'
import { PeliculaComponent } from './components/pelicula/pelicula.component'
// servicios
import { PeliculasService } from './providers/peliculas.service'
import { BuscarComponent } from './components/buscar/buscar.component'
// pipes
import { NoimagePipe } from './pipes/noimage.pipe'
import { GaleriaComponent } from './components/home/galeria.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PeliculaComponent,
    BuscarComponent,
    NoimagePipe,
    GaleriaComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientJsonpModule, HttpClientModule, FormsModule],
  providers: [PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule {}
