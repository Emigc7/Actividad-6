import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  
  titulo: string = 'Nuevo Usuario'
  userForm: FormGroup | any;
  msg: string = "";
  type: string = "";

  constructor(
   // private usersService: UsersService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private usersService : UsersService
  ) {
    this.userForm = new FormGroup({
      first_name: new FormControl("", [        
        Validators.required,
        Validators.minLength(3)]),
      last_name: new FormControl("", [
        Validators.required,
          Validators.minLength(3)
      ]),
      email: new FormControl("", [
        Validators.minLength(5),
        Validators.pattern(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
      ]),
      foto: new FormControl("", [
        Validators.required,
          Validators.minLength(10)
      ]),
    }, []);
  }

ngOnInit(): void {
  this.activatedRoute.params.subscribe( async (params : any) => {
    let id = params.userid

    if (id){
      this.titulo = "Editar Perfil"

      const response = await this.usersService.getById(id)
      const user : Usuario = response;

      this.userForm = new FormGroup({
        id: new FormControl(id, []),
        first_name: new FormControl(user?.first_name, [
          Validators.required,
          Validators.minLength(3)
        ]),
        last_name: new FormControl(user?.last_name, [
          Validators.required,
          Validators.minLength(3)
        ]),
        email: new FormControl(user?.email, [
          Validators.required,
          Validators.minLength(5),
          Validators.pattern(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
        ]),
        foto: new FormControl(user?.image, [
          Validators.required,
          Validators.minLength(10)
        ]),
      }, []);
    }
    
  })
}


async getDataForm() {
  let user = this.userForm.value
 
  if (user.id) {
    //Actualizando
    let response = await this.usersService.update(user);
    this.msg =`Los datos de ${response.first_name} han sido actualizados correctamente`;
    console.log(this.msg)
    this.type= 'success'
    //this.router.navigate(['/home']);
    
  } else {
    //Registrando
    try {
      let response = await this.usersService.create(user)
      if (response.id) {
        this.msg = `usuario ${response.first_name} con id ${response.id} se creado correctamente`;
        this.type = 'success'
       // this.router.navigate(['/home']);
      }
    }
    catch (err) {
      console.log(err)
    }
  }
}





  checkControl(pError: string): boolean {
   
    
    if (this.userForm.get('first_name')?.hasError(pError) && this.userForm.get('first_name')?.touched || this.userForm.get('last_name')?.hasError(pError) && this.userForm.get('last_name')?.touched || this.userForm.get('email')?.hasError(pError) && this.userForm.get('email')?.touched || this.userForm.get('foto')?.hasError(pError) && this.userForm.get('foto')?.touched ) {
      
      return true
    

    }
    return false
  }
}
