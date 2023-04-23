import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formulario: FormGroup;
  hasError: boolean;

  constructor(
    private usersService: UsersService,
    private router: Router
  ) {
    this.hasError = false;
    this.formulario = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }


  async onSubmit() {
    this.hasError = false;
    const response = await this.usersService.login(this.formulario.value)
    console.log(response);
    if (response.error) {
      this.hasError = true;
    } else {
      this.hasError = false;
      localStorage.setItem('token_sprencia', response.token);
      localStorage.setItem('rol_sprencia', response.rol);
      localStorage.setItem('id_sprencia', response.id);

      Swal.fire({
        title: 'Login Correcto',
        text: 'Has accedido a Sprencia',
        icon: 'success',
        confirmButtonText: 'Ok'
      })
      this.router.navigate(['listado-actividades'])
    }
  }

}
