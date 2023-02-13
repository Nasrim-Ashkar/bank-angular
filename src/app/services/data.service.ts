import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentUser:any

  currentAcno:any

  constructor() { }
  userDetails:any={
    1000:{acno:1000,username:"anu",password:"abc123",balance:0,transaction:[]},
    1001:{acno:1001,username:"rani",password:"abc123",balance:0,transaction:[]},
    1002:{acno:1002,username:"joel",password:"abc123",balance:0,transaction:[]},
    1003:{acno:1003,username:"ram",password:"abc123",balance:0,transaction:[]},
    1004:{acno:1004,username:"joe",password:"abc123",balance:0,transaction:[]},
    1005:{acno:1005,username:"kevin",password:"abc123",balance:0,transaction:[]},

  }
  register(uname:any,acno:any,psw:any){
    if(acno in this.userDetails){
      return false//with return type can store data and when call the function from another component it should be stored and the function should be with argument and return type
    }
    else{
      this.userDetails[acno]={acno,username:uname,password:psw,balance:0}
      console.log(this.userDetails);
      return true
    }

  }
  login(acno:any,psw:any){
    var userDetails=this.userDetails

    if (acno in userDetails ){
      if(psw==userDetails[acno]["password"]){
        this.currentUser=this.userDetails[acno]["username"]
        // console.log(this.currentUser);

        this.currentAcno=acno
        
        return true
        }
      else{
        return false
      }

    }
    else{
      return false
    }
  }
  deposit(acnum:any,password:any,amount:any){
    //convert string amount to number
    let userDetails=this.userDetails
    var amnt=parseInt(amount)
    if(acnum in userDetails){
      if(password==userDetails[acnum]["password"]){
      
        //update balance
        userDetails[acnum]["balance"]+=amnt
      
        //return current balance
      
        //transaction data store
        userDetails[acnum]["transaction"].push({Type:"CREDIT",amount:amnt})

        // console.log(userDetails);

        return userDetails[acnum]["balance"]


        

      }
      else{
        return false
      }
    }
    else{
      return false
    }
  }

  withdraw(acnum:any,password:any,amount:any){
    //convert string amount to number
    let userDetails=this.userDetails
    var amnt=parseInt(amount)
    if(acnum in userDetails){
      if(password==userDetails[acnum]["password"]){
        if(amnt<=userDetails[acnum]["balance"]){
                   //update balance

          userDetails[acnum]["balance"] -= amnt

          userDetails[acnum]["transaction"].push({Type:"DEBIT",amount:amnt})
          console.log(userDetails);
          

        
         //return current balance
          return userDetails[acnum]["balance"]
        }
        else{
          alert('insufficient balance')
          return false
        }
        
        

      }
      else{
        alert('incorrect password')
        return false
      }
    }
    else{
      alert('incorrect account number')

      return false
    }
  }

  getTransaction(acno:any){
    return this.userDetails[acno]["transaction"]
  }
  }

