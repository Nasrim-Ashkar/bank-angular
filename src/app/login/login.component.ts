import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  data="your perfect banking partner!!"

  inputplaceholder="Enter your Account Number"
  acno=""
  psw=""
  
  constructor(private router:Router,private ds:DataService) { }

  ngOnInit(): void{

  }
  login(){
    var acnum=this.acno
    var psw=this.psw
    const result=this.ds.login(acnum,psw)
    if (result){
      alert('login success!!!')
      this.router.navigateByUrl('dashboard')
    }
    else{
      alert('incorrect account or password')
    }
    
  }
    // login(a:any,b:any){

    //   var acnum=a.value
    //   var psw=b.value
    //   console.log(a.value);
    //   var userDetails1=this.userDetails
    //   if (acnum in userDetails1 ){
    //     if(psw==userDetails1[acnum]["password"]){
    //       alert("login success!!")
    //     }
    //     else{
    //       alert("incooreect password")
    //     }
  
    //   }
    //   else{
    //     alert("Account Incorrect or not registered yet")
    //   }
    // alert('login clicked')

  
  // acnoChange(event:any){
  //   this.acno=event.target.value
  //   // console.log(this.acno);
    
  // }
  // pswrdChange(event:any){
  //   this.psw=event.target.value
  //   // console.log(this.psw);
  // }
  

}

