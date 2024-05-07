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

  mostrarError : boolean = false;
  mensajeDias : boolean = false
  errorMensaje: string = ''; // Agrega esta línea

  mostrarExito : boolean = false;

  onSubmit(){
    // Validar campos
    if (!this.nombre || !this.correo || !this.telefono || !this.hora || !this.fecha) {
      this.mostrarError = true;
      this.errorMensaje = "Por favor, completa todos los campos"; // Mensaje genérico
      setTimeout(() => {
        this.mostrarError = false;
      }, 3000); 
      return; 
    }
    const fechaActual = new Date();
    const fechaSeleccionada = new Date(this.fecha);
        if (fechaSeleccionada < fechaActual) {
      // Mostrar error si la fecha seleccionada es anterior a la fecha actual
      this.mensajeDias = true;
      setTimeout(() => {
        this.mensajeDias = false;
      }, 3000); 
      return; 
    }

    const nuevaCita = {
      nombre: this.nombre,
      correo: this.correo,
      telefono: this.telefono,
      hora: this.hora,
      fecha: this.fecha,
      nombreMascota: this.nombreMascota
    };
  
    // Limpiar campos
    this.nombre='';
    this.correo='';
    this.telefono=0;
    this.hora=0;
    this.fecha='';

    this.mostrarError = false;

    this.mostrarExito = true;

    // Ocultar alerta de éxito
    setTimeout(() => {
      this.mostrarExito = false;
    }, 3000);
  
    this.citas.push(nuevaCita); // Agregar la cita a la lista
    localStorage.setItem('citas', JSON.stringify(this.citas)); // Guardar la lista en localStorage
    console.log('Cita guardada:', nuevaCita);

    console.log(this.nombreMascota);
  
    // Guardar la fecha seleccionada en localStorage
    localStorage.setItem('fechaSeleccionada', this.fecha);
  }

  ngOnInit(){
    const citasGuardadas = localStorage.getItem('citas');
    if (citasGuardadas) {
      this.citas = JSON.parse(citasGuardadas); // Recuperar la lista del localstorage
    } 
  }
  ordenarCitasPorFecha(citas: any[]): any[] {
    return citas.sort((a, b) => new Date(a.fecha).getTime() - new Date(b.fecha).getTime());
  }
}
