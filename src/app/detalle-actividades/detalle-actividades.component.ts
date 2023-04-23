import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActivitiesService } from '../services/activities.service';

@Component({
  selector: 'app-detalle-actividades',
  templateUrl: './detalle-actividades.component.html',
  styleUrls: ['./detalle-actividades.component.css']
})
export class DetalleActividadesComponent {
  activity!: any;

  constructor(
    private activitiesService: ActivitiesService,
    private activatedRoute: ActivatedRoute
  ) { }

  // Recuperar el id de la URL
  ngOnInit() {
    this.activatedRoute.params.subscribe(async (params: any) => {
      let id = parseInt(params.id);
      // Recuperar la informacion de esa acitividad en concreto
      this.activity = await this.activitiesService.getById(id);
    })
  }



}
