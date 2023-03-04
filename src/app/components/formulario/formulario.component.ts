import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  title: string = 'Registro'
  userForm: FormGroup | any;
  msg: string = "";
  type: string = "";

  constructor(
   // private usersService: UsersService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.userForm = new FormGroup({
      first_name: new FormControl("", [        
        Validators.required,
        Validators.minLength(3)]),
      last_name: new FormControl("", [
        Validators.required
      ]),
      email: new FormControl("", [
        Validators.required
      ]),
      foto: new FormControl("", [
        Validators.required
      ]),
    }, []);
  }


  getDataForm() {
    console.log(this.userForm.value)
  }



  checkControl(pError: string): boolean {
   
    //if (this.userForm.get(pControlName)?.hasError(pError) && this.userForm.get(pControlName)?.touched) {
    let validador: boolean= true;

    for (let key in this.userForm.value){
      if (this.userForm.get(key)?.hasError(pError) && this.userForm.get(key)?.touched){
        
      }else{
        validador = false
      }

    }

    return validador
  }
}
