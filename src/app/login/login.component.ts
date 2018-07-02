import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared-service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  private email:string;
  private password :string;

  constructor(private router:Router , private userService :UserService) { }

  ngOnInit() {
  }
  onloginSubmit(){
    const user = {
      email : this.email,
      password : this.password
    }
    this.userService.login(user).subscribe(data=>{
        sessionStorage.setItem('user',JSON.stringify(data));
        this.router.navigate(['/list']);
    });
  }

  onregisterSubmit(){
    this.router.navigate(['/register']);
  }
}
