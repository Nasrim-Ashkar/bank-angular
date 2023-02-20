import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  constructor(private router:Router,private ds:DataService,private fb:FormBuilder) { }
 
    //create reactive form of register form
    registerForm=this.fb.group({
      accid:['',[Validators.required,Validators.pattern('[0-9]+')]],
      usname:['',[Validators.required,Validators.pattern('[A-Za-z]+')]],
      psw:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]]

    })


  ngOnInit(): void{

  }

  register(){
    var username=this.registerForm.value.usname
    var accnumb=this.registerForm.value.accid
    var passw=this.registerForm.value.psw
    // alert('Registered Successfully')
    if(this.registerForm.valid){

      const result=this.ds.register(username,accnumb,passw)
      if(result){
        alert("registered")
        this.router.navigateByUrl("")
      }
      else{
        alert("already exist")
      }
      
    }

    
    else{
      alert('invalid form')
    }
  }
}
