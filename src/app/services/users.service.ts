import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario.interface';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl:string = 'https://peticiones.online/api/users/';
  constructor(private httpClient: HttpClient) { }

  getAll(pPage: number = 1): Promise<any> {
    return lastValueFrom(this.httpClient.get<any>(`${this.baseUrl}?page=${pPage}`))
  }

  getById(pId: string): Promise<any> {
    return lastValueFrom(this.httpClient.get<any>(`${this.baseUrl}${pId}`))
  }

  create(pUser:Usuario) : Promise<Usuario>{
    return lastValueFrom(this.httpClient.post<Usuario>(this.baseUrl,pUser))
  }

  update(pUser:Usuario) : Promise<Usuario>{
    return lastValueFrom(this.httpClient.put<Usuario>(`${this.baseUrl}${pUser.id}`,pUser))
  }

  delete(pId: string): Promise<Usuario> {
    return lastValueFrom(this.httpClient.delete<Usuario>(`${this.baseUrl}${pId}`))
  }
}
