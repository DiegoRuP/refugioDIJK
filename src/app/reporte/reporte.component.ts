import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Cita {
  nombre: string;
  correo: string;
  telefono: number;
  hora: number;
  fecha: string;
}

@Component({
  selector: 'app-reporte',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reporte.component.html',
  styleUrl: './reporte.component.css'
})

export class ReporteComponent implements OnInit{
  citasPasadas: any[] = [];
  citasFuturas: any[] = [];

  constructor() { }

  ngOnInit(): void {
    const citasGuardadas = localStorage.getItem('citas');
    if (citasGuardadas) {
      const citas = JSON.parse(citasGuardadas) as Cita[]; // Asegurar que las citas se interpreten como tipo Cita
      const fechaActual = new Date().toISOString().split('T')[0]; // Obtener la fecha actual en formato YYYY-MM-DD

      citas.forEach(cita => {
        if (cita.fecha < fechaActual) {
          this.citasPasadas.push(cita);
        } else {
          this.citasFuturas.push(cita);
        }
      });
    }
  }
}
