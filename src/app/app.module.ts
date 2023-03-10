import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { UserComponent } from './components/user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { UserCardComponent } from './components/home/user-card/user-card.component';
import { UserViewComponent } from './components/home/user-view/user-view.component';
import { NotificacionesComponent } from './components/notificaciones/notificaciones.component';
import { C404Component } from './components/c404/c404.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormularioComponent,
    UserComponent,
    UserCardComponent,
    UserViewComponent,
    NotificacionesComponent,
    C404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
