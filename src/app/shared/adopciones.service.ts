import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdopcionesService {

  urlAPI:string = "https://refugio.free.beeceptor.com/"

  constructor( private http: HttpClient) { }

  retornar(){
    return this.http.get(this.urlAPI).pipe(take(1));
  }


}
