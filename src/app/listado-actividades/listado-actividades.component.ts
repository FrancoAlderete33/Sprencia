import { Component } from '@angular/core';
import { Activity } from '../interfaces/activity';
import { ActivitiesService } from '../services/activities.service';

@Component({
  selector: 'app-listado-actividades',
  templateUrl: './listado-actividades.component.html',
  styleUrls: ['./listado-actividades.component.css']
})
export class ListadoActividadesComponent {
  idActivity: number = 0;
  activities: Activity[];

  // Inyectamos el servicio
  constructor(
    private activitiesService: ActivitiesService
  ) {
    this.activities = [];
  }

  // Es una promesa por lo tanto la tenemos que consumirla 
  async ngOnInit() {
    const response = await this.activitiesService.getAll();
    console.log(response);
    this.activities = response
  }

  /* async onClick(idActivity: number) {
    const response = await this.activitiesService.getById(idActivity)
    console.log(response);
  } */


}
