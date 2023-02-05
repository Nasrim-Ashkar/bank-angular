import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  data="your perfect banking partner!!"

  inputplaceholder="Enter your Account Number"

  acno=''

  psw:any
  userDetails:any={
    1000:{acno:1000,username:"anu",password:"abc123",balance:0},
    1001:{acno:1001,username:"rani",password:"abc123",balance:0},
    1002:{acno:1002,username:"joel",password:"abc123",balance:0},
    1003:{acno:1003,username:"ram",password:"abc123",balance:0},
    1004:{acno:1004,username:"joe",password:"abc123",balance:0},
    1005:{acno:1005,username:"kevin",password:"abc123",balance:0},

  }
  constructor() { }

  ngOnInit(): void{

  }
  login(){
    alert('login clicked')
  }
  acnoChange(event:any){
    this.acno=event.target.value
    console.log(this.acno);
    
  }
  pswrdChange(event:any){
    this.psw=event.target.value
    console.log(this.psw);
  }
  

}

