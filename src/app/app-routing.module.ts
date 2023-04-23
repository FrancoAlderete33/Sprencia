import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleActividadesComponent } from './detalle-actividades/detalle-actividades.component';
import { FormularioActividadComponent } from './formulario-actividad/formulario-actividad.component';
import { FormularioProveedoresComponent } from './formulario-proveedores/formulario-proveedores.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { ListadoActividadesComponent } from './listado-actividades/listado-actividades.component';
import { LoginComponent } from './login/login.component';
import { Page404Component } from './page404/page404.component';
import { RegisterComponent } from './register/register.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'sobre-nosotros', component: SobreNosotrosComponent },
  { path: 'quiero-ser-proveedor', component: FormularioProveedoresComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'listado-actividades', component: ListadoActividadesComponent, canActivate: [AuthGuard] },
  { path: 'listado-actividades/:id', component: DetalleActividadesComponent, canActivate: [AuthGuard] },
  { path: 'actividades/new', component: FormularioActividadComponent, canActivate: [AuthGuard] },
  { path: '**', component: Page404Component }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
