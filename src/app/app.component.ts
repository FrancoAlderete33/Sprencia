import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularSprencia';

  constructor(
    public usersService: UsersService,
    private router: Router
  ) {

  }


  logOut() {
    localStorage.removeItem('token_sprencia');
    localStorage.removeItem('rol_sprencia');
    localStorage.removeItem('id_sprencia');
    this.router.navigate(['/login']);

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Has cerrado la sesion',
      showConfirmButton: true
    })
  }





}
