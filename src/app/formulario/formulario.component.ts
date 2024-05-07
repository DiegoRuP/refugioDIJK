import { Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Input } from '@angular/core';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})



export class FormularioComponent implements OnInit {

  @Input() nombreMascota: string = '';
  nombre: string ='';
  correo: string ='';
  telefono: number =0;
  hora: number =0;
  fecha: string ='';

  citas: any[] = [];

  constructor() {}

  onSubmit(){
    const nuevaCita = {
      nombre: this.nombre,
      correo: this.correo,
      telefono: this.telefono,
      hora: this.hora,
      fecha: this.fecha,
      nombreMascota: this.nombreMascota
    };
  
    this.nombre='';
    this.correo='';
    this.telefono=0;
    this.hora=0;
    
  
    this.citas.push(nuevaCita); // agregar la cita a la lista
    localStorage.setItem('citas', JSON.stringify(this.citas)); // guardar la lista en localStorage
    console.log('Cita guardada:', nuevaCita);

    console.log(this.nombreMascota);
  
    const fechaSeleccionada = (document.getElementById('fecha') as HTMLInputElement).value;
    localStorage.setItem('fechaSeleccionada', fechaSeleccionada);
  }
  

  ngOnInit(){
    const citasGuardadas = localStorage.getItem('citas');
    if (citasGuardadas) {
      this.citas = JSON.parse(citasGuardadas); //recuperar la lista del localstorage
    } 
  }

  ordenarCitasPorFecha(citas: any[]): any[] {
    return citas.sort((a, b) => new Date(a.fecha).getTime() - new Date(b.fecha).getTime());
  }
  
}