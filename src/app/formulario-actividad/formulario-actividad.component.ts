import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivitiesService } from '../services/activities.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-formulario-actividad',
  templateUrl: './formulario-actividad.component.html',
  styleUrls: ['./formulario-actividad.component.css']
})
export class FormularioActividadComponent {

  formulario: FormGroup;


  constructor(
    private activitiesService: ActivitiesService,
    private router: Router
  ) {
    this.formulario = new FormGroup({
      actividad: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required]),
      horarios_disponibles: new FormControl('', [Validators.required]),
      precio: new FormControl('', [Validators.required])
    })
  }


  onSubmit() {
    const response = this.activitiesService.create(this.formulario.value);
    console.log(response);
    Swal.fire({
      title: 'Actividad creada',
      icon: 'success',
      confirmButtonText: 'Ok'
    })
    this.router.navigate(['/listado-actividades'])

  }

}
