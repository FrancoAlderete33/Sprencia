import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  formulario: FormGroup;
  hasError!: boolean;

  constructor(
    private usersService: UsersService,
    private router: Router
  ) {
    this.formulario = new FormGroup({
      username: new FormControl('', [Validators.required]),
      apellidos: new FormControl('', [Validators.required]),
      ciudad: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    })
  }

  async onSubmit() {
    this.hasError = false
    const response = await this.usersService.register(this.formulario.value);
    console.log(response);
    if (response.error) {
      this.hasError = true;
    } else {
      this.hasError = false
      Swal.fire({
        title: 'Registro Correcto',
        icon: 'success',
        confirmButtonText: 'Ok'
      })
      this.router.navigate(['/login'])
    }

  }
  /* 
    async onSubmit() {
      this.hasError = false;
      const response = await this.usersService.login(this.formulario.value)
      console.log(response);
      if (response.error) {
        this.hasError = true;
      } else {
        this.hasError = false;
        localStorage.setItem('token_sprencia', response.token)
        Swal.fire({
          title: 'Login Correcto',
          text: 'Has accedido a Sprencia',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
        this.router.navigate(['listado-actividades'])
      }
    } */



}
