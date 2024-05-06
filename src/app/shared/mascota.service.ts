import { Injectable } from '@angular/core';
import { AdoptaMascota } from '../interfaces/adopcion';
import { MASCOTAS } from '../misMascotas';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  private mascotas: AdoptaMascota[] = MASCOTAS;

  constructor() { }

  getMascotas(): AdoptaMascota[] {
    return this.mascotas;
  }

  getUnaAdopcion(posicion:number):AdoptaMascota{
    return this.mascotas[posicion]
  }

  searchMascota(raza: string): number{
    return this.mascotas.findIndex(m => m.raza === raza);
  }
}
