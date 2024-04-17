import { Component } from '@angular/core';
import { AdopcionesService } from '../shared/adopciones.service';
import { AdoptaMascota } from '../interfaces/adopcion';

@Component({
  selector: 'app-mascota',
  standalone: true,
  imports: [],
  templateUrl: './mascota.component.html',
  styleUrl: './mascota.component.css'
})
export class MascotaComponent {

  array:AdoptaMascota[] = [];

  constructor( public adopcionesService: AdopcionesService) {
  }

  ngOnInit(): void {
    console.log("En este momento el componente se cargó");
    this.recuperarDatos();
  }

  recuperarDatos(){
    console.log("Entré");

    this.adopcionesService.retornar().subscribe({
      next: this.successRequest.bind(this),
      error: (err) => (console.log(err))
  });
  }

  successRequest(data:any):void{
    console.log("Data", data);
    this.array = data.products;
    console.log("Array", this.array);
  }

}
