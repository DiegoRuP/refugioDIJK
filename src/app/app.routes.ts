import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AdoptaComponent } from './adopta/adopta.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { ReporteComponent } from './reporte/reporte.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'adopta', component: AdoptaComponent},
    {path: 'galeria', component: GaleriaComponent},
    {path: 'reporte', component: ReporteComponent},
    {path: 'about', component: AboutComponent},
];
