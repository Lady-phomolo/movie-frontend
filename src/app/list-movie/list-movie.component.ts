import { Component, OnInit } from '@angular/core';
import {MovieService} from '../shared-service/movie.service';
import { Movie } from '../movie';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.css']
})
export class ListMovieComponent implements OnInit {

  private movies : Movie[];

  constructor(private movieService:MovieService , private router:Router) { }

  ngOnInit() {
    this.movieService.getMovies().subscribe((movies)=>{
      this.movies=movies;
    })
  }
  updateMovie(movies){
         this.movieService.setter(movies);
         this.router.navigate(['/op'])
  }
  
  newMovie(){
    let movie = new Movie();
    this.movieService.setter(movie);
    this.router.navigate(['/op'])
  }
}
