import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdoptaComponent } from './adopta/adopta.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { AboutComponent } from './about/about.component';
import { ReporteComponent } from './reporte/reporte.component';
import { NavbarComponent } from './navbar/navbar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, NavbarComponent, HomeComponent, AdoptaComponent, GaleriaComponent, AboutComponent, ReporteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'refugioDIJK';
}
