import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})

export class FormularioComponent {
  nombre: string='';
  correo: string='';
  telefono: string='';
  dia: string='';
  hora: string='';

  datosRecuperados: any;

  onSubmit(){
    const datos={
      nombre: this.nombre,
      correo: this.correo,
      telefono: this.telefono,
      dia: this.dia,
      hora: this.hora
    };

    localStorage.setItem('datosForm', JSON.stringify(datos));
    console.log('Datos guardados');
  }

  ngOnInit(){
    const datos=localStorage.getItem('datosForm');
    if (datos) {
      this.datosRecuperados=JSON.parse(datos);
    } 
  }
}