import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl: string

  constructor(
    private httpClient: HttpClient
  ) {
    this.baseUrl = 'http://localhost:3300/api/users'
  }



  register(formValues: any): Promise<any> {
    return lastValueFrom(
      this.httpClient.post<any>(`${this.baseUrl}/register`, formValues)
    )
  }

  login(formValues: any): Promise<any> {
    return lastValueFrom(
      this.httpClient.post<any>(`${this.baseUrl}/login`, formValues)
    )
  }

  isAdmin() {
    const rol = localStorage.getItem('rol_sprencia');
    if (rol === 'admin') {
      return true;
    } else {
      return false;
    }
  }

  






}
