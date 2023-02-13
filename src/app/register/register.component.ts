import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private router:Router,private ds:DataService) { }
  usname:any
  accid:any
  pswd:any

  ngOnInit(): void{

  }

  register(){
    var username=this.usname
    var accnumb=this.accid
    var passw=this.pswd    
    // alert('Registered Successfully')

    const result= this.ds.register(username,accnumb,passw)
    if(result){
      alert("registered")
      this.router.navigateByUrl("")
    }
    else{
      alert("already exist")
    }
  }
}
