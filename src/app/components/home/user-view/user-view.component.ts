import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit{

  user!: Usuario | any;
  constructor(
    private usersServices: UsersService,
    private activatedRoute: ActivatedRoute
  ){}


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async (params: any) => {

      
      let id: string = params.userid;
    
      let response: any = await this.usersServices.getById(id);
      console.log(response);
      this.user = response;
    })
  }
}
