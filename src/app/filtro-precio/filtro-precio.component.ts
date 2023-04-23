import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivitiesService } from '../services/activities.service';

@Component({
  selector: 'app-filtro-precio',
  templateUrl: './filtro-precio.component.html',
  styleUrls: ['./filtro-precio.component.css']
})
export class FiltroPrecioComponent {


  formulario: FormGroup;

  constructor(
    private activitiesService: ActivitiesService

  ) {

    this.formulario = new FormGroup({
      preMin: new FormControl('', [Validators.required, Validators.min(0)]),
      preMax: new FormControl('', [Validators.required, Validators.min(0)])
    })
  }

  ngOnInit() { }

  onSubmit() {
    console.log(this.formulario.value)
    const datos = this.formulario.value;
  }





}
