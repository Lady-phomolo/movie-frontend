import { Injectable } from '@angular/core';
import {Http , Response , Headers} from '@angular/http';
import { RequestOptions } from '@angular/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Movie } from '../movie';


@Injectable({
  providedIn: 'root'
}) 
export class MovieService {

  private baseUrl:string='http://localhost:8080/api/'; 
  private headers = new Headers({'content-type':'application/json'});
  private options = new RequestOptions({ headers:this.headers });

  private movie : Movie;
  constructor(private http:Http) { }

  getMovies():Observable<Movie[]>{

    return this.http.get(this.baseUrl + "list", this.options)
            .pipe(map((res:Response)=>res.json()));
  }

  getMovie(id:number):Observable<Movie[]>{

    return this.http.get(this.baseUrl + "list/" +id, this.options)
            .pipe(map((res:Response)=>res.json()));
  }

  createMovie(movie:Movie):Observable<Movie[]>{
    return this.http.post(this.baseUrl + "add",JSON.stringify(movie) ,this.options)
            .pipe(map((res:Response)=>res.json()));
  }

  updateMovie(movie:Movie):Observable<Movie[]>{
    return this.http.put(this.baseUrl + "update",JSON.stringify(movie) ,this.options)
            .pipe(map((res:Response)=>res.json()));
  }

  setter(movie:Movie){
     this.movie=movie;
  }

  getter(){
    return this.movie;
  }
}
