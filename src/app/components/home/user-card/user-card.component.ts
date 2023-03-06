import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {

  @Input() miUser!: Usuario | any;
  @Output() msg:EventEmitter<string>;
 
  constructor(private usersService: UsersService){
    this.msg = new EventEmitter();
  }
  

 async deleteUser(pId : string | undefined):Promise<void>{

    if(pId !== undefined){

      try{
        let response= await this.usersService.delete(pId);
        this.msg.emit(`El usuario ${response.first_name} ${response.last_name} ha sido borrado correctamente`) 
      }catch{
        console.log(Error)
      }

    }

    
  }
}
