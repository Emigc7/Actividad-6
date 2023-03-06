import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  textoBorrado : string = "";
  visible:boolean = false;
  arrUsers: Usuario[] = [];
  arrPages:number[] = [];
  currentPage: number=1;
  totalPages: number = 1;

  constructor(
    private usersService: UsersService,
    private activatedRoute: ActivatedRoute) { }

  async ngOnInit(): Promise<any> {

    try {
      let response = await this.usersService.getAll()
      this.currentPage = response.page;
      this.totalPages = response.total_pages;
      this.arrUsers = response.results;
      
    }
    catch (error) {
      console.log(error);
    }

    this.getArrPage()
    this.gotoPage()

  }
  

  async gotoPage(): Promise<void> {

    
    this.activatedRoute.params.subscribe(async (params: any) => {

      
      this.currentPage = Number(params.page);
      
      let respuesta = await this.usersService.getAll(this.currentPage);
      console.log(respuesta)
      this.arrUsers = respuesta.results;
    })
    //console.log(this.currentPage)
    //console.log(this.arrUsers)

  }


  getArrPage():void{
    
      for(let i=1;i<=this.totalPages;i++){
        this.arrPages.push(i)
      }
  }

  mensageo($event:string):void{
    this.textoBorrado = $event;
    if (this.textoBorrado !== ""){
      this.visible=true;
      setTimeout(() => {
        this.visible = false;
      }, 2200);
    }
  }

  cerrar(){
    this.textoBorrado="";
    this.visible=false;
  }
}