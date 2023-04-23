import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  private baseUrl: string = 'http://localhost:3300/api/activities'

  // Importamos el "httpClient" para que me reconozca las peticiones
  constructor(
    private httpClient: HttpClient
  ) { }

  // Creamos un metodo que nos traiga todas las actividades
  // Usamos el metodo "httpClient" con el metodo "get"
  getAll(): Promise<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        authorization: localStorage.getItem('token_sprencia')!
      })
    }


    return lastValueFrom(
      this.httpClient.get(this.baseUrl, httpOptions)
    )
  }

  getById(idActivity: number): Promise<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        authorization: localStorage.getItem('token_sprencia')!
      })
    }


    return lastValueFrom(
      this.httpClient.get(this.baseUrl + '/' + idActivity, httpOptions)
    )
  }

  create(formValues: any): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: localStorage.getItem('token_sprencia')!
      })
    }

    return lastValueFrom(
      this.httpClient.post<any>(`${this.baseUrl}/create`, formValues, httpOptions)
    )
  }




}
