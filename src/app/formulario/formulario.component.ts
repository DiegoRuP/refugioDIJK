import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})

export class FormularioComponent implements OnInit {

  nombre: string='';
  correo: string='';
  telefono: number=0;
  dia: number=0;
  hora: number=0;

  citas: any[] = [];

  constructor() {}

  onSubmit(){
    const nuevaCita = {
      nombre: this.nombre,
      correo: this.correo,
      telefono: this.telefono,
      dia: this.dia,
      hora: this.hora
    };
    this.citas.push(nuevaCita); //agregar la cita a la lista
    localStorage.setItem('citas', JSON.stringify(this.citas)); //guardar la lista en localstorage
    console.log('Cita guardada:', nuevaCita);
    //limpiar los datos del formulario
    this.nombre='';
    this.correo='';
    this.telefono=0;
    this.dia=0; 
    this.hora=0;
  }

  ngOnInit(){
    const citasGuardadas = localStorage.getItem('citas');
    if (citasGuardadas) {
      this.citas = JSON.parse(citasGuardadas); //recuperar la lista del localstorage
    } 
  }
}