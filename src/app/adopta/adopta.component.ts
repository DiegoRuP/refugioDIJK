import { Component } from '@angular/core';
import { AdopcionesService } from '../shared/adopciones.service';
import { AdoptaMascota } from '../interfaces/adopcion';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-adopta',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './adopta.component.html',
  styleUrl: './adopta.component.css'
})

export class AdoptaComponent {

  adopciones:AdoptaMascota[] = [];

  constructor( public adopcionesService: AdopcionesService) {
  }

  ngOnInit(): void {
    console.log("En este momento el componente se cargó");
    this.recuperarDatos();
  }

  recuperarDatos(){
    console.log("Estoy dentro");

    this.adopcionesService.retornar().subscribe({
      next: this.successRequest.bind(this),
      error: (err) => (console.log(err))
  });
  }

  successRequest(data:any):void{
    console.log("Data", data);
    this.adopciones = data.adopciones;
    console.log("Array", this.adopciones);
  }

}
