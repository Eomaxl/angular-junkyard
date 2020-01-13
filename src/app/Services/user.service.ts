import { Injectable } from '@angular/core';
import { IUser } from './../Interfaces/iuser';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

  private _rooturl: string = 'https://jsonplaceholder.typicode.com/users';

  private _users: IUser[] =[];
  
  constructor(private http:HttpClient) { }


  getUsers():IUser[]{
    return this._users;
  }

  getUsersByRest(): Observable<IUser[]>{
    return this.http.get<IUser[]>(this._rooturl);
  }

  getUserById(id:number): IUser {
    return this._users.filter( user => user.id === id)[0];
  }

  getUserViaRest(id:number): Observable<IUser>{
    return this.http.get<IUser>(`${this._rooturl}/${id}`)
  }

  addUser(user:IUser){
    this._users.push(user);
  }

}