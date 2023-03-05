import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import { HomeComponent } from './components/home/home.component';
import { UserViewComponent } from './components/home/user-view/user-view.component';

const routes: Routes = [

  {path:"", pathMatch: 'full', redirectTo: 'home'},
  {path:"home", component: HomeComponent},
  {path: "usuario/:userid", component: UserViewComponent },
  {path:"NuevoUsuario", component: FormularioComponent},
  {path: "update/:userid", component: FormularioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
