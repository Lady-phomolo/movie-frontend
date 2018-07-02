import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import {MovieService} from '../shared-service/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movieform',
  templateUrl: './movieform.component.html',
  styleUrls: ['./movieform.component.css']
})
export class MovieformComponent implements OnInit {

  private movie :Movie;
  constructor(private movieService:MovieService , private router:Router) { }

  ngOnInit() {

    this.movie=this.movieService.getter();
  }

  processForm(){
    if(this.movie.movie_id==undefined){
      this.movieService.createMovie(this.movie)
      .subscribe((movie)=>{
        console.log(movie);
        this.router.navigate(['/list']);
      })
    }else{
      this.movieService.updateMovie(this.movie)
      .subscribe((movie)=>{
        console.log(movie);
      this.router.navigate(['/list']);
    })
  }

}

}