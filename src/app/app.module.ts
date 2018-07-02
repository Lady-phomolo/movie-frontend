import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {RouterModule , Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ListMovieComponent } from './list-movie/list-movie.component';
import { MovieformComponent } from './movieform/movieform.component';

import { MovieService } from './shared-service/movie.service';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserService } from './shared-service/user.service';

const appRotes:Routes =[
  {path:'', component:LoginComponent},
  {path:'register', component:RegistrationComponent},
  { path:'list',  component:ListMovieComponent},
  { path:'op', component:MovieformComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    ListMovieComponent,
    MovieformComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRotes)
  ],
  providers: [MovieService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
