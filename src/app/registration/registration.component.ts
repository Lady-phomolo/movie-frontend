import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared-service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  private username:string;
  private email:string;
  private password :string;

  constructor(private router:Router , private userService :UserService) { }

  ngOnInit() {
  }

  onSubmitRegistration(){
    const user = {
      username : this.username,
      email : this.email,
      password: this.password
    }

    this.userService.register(user).subscribe(data=>{
      if(data=="good"){
        this.router.navigate(['/'])
      }else{
        alert("Email address is already in use")
      }
    })
  }

  onloginSubmit(){
    this.router.navigate(['/'])
  }
}
