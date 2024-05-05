import { Component, Input } from '@angular/core';
import { AdopcionesService } from '../shared/adopciones.service';
import { AdoptaMascota } from '../interfaces/adopcion';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-adopta',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './adopta.component.html',
  styleUrl: './adopta.component.css'
})

export class AdoptaComponent {
  @Input() mascota!: AdoptaMascota[];

  constructor(public adopcionesService:AdopcionesService, public activatedRoute: ActivatedRoute){
    this.activatedRoute.params.subscribe(params => {
      // this.mascota = AdopcionesService.getUnHeroe(params['id']);
    })
  }
}
