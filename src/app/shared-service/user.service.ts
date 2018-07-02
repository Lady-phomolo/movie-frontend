import { Injectable } from '@angular/core';
import {Http , Response , Headers} from '@angular/http';
import { RequestOptions } from '@angular/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl:string='http://localhost:8080/api/'; 
  private headers = new Headers({'content-type':'application/json'});
  private options = new RequestOptions({ headers:this.headers });

  constructor(private http:Http) { }

  // register(user){
  //   return this.http.post(this.baseUrl + "register",JSON.stringify(user) ,this.options)
  //           .pipe(map((res:Response)=>res.json()));
  // }

  // login(user){
  //   return this.http.get(this.baseUrl + 'login/' +user.email +'/'+ user.password,this.options)
  //           .pipe(map((res:Response)=>res.json()));
  // }

  register(user){
    let headers = new Headers();
    headers.append('Content-type','application/json');
    return this.http.post('http://localhost:8080/api/register',user,{headers:headers})
    .pipe(map(res=>res.text()));
  }

  login(user){
    let headers = new Headers();
    headers.append('Content-type','application/json');
    return this.http.get('http://localhost:8080/api/login/'+ user.email +'/'+user.password,{headers:headers})
     .pipe(map(res => res.text() ? res.json() : res));
  }
}
