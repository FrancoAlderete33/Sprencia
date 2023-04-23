import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { FormularioProveedoresComponent } from './formulario-proveedores/formulario-proveedores.component';
import { ListadoActividadesComponent } from './listado-actividades/listado-actividades.component';
import { DetalleActividadesComponent } from './detalle-actividades/detalle-actividades.component';
import { FormularioActividadComponent } from './formulario-actividad/formulario-actividad.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Page404Component } from './page404/page404.component';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { FiltroPrecioComponent } from './filtro-precio/filtro-precio.component'

registerLocaleData(localeEs, 'es')

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    SobreNosotrosComponent,
    FormularioProveedoresComponent,
    ListadoActividadesComponent,
    DetalleActividadesComponent,
    FormularioActividadComponent,
    Page404Component,
    FiltroPrecioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
