import { Component } from '@angular/core';
import { StudentService } from 'src/app/service/student.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email!:string
  password!:string
  constructor(private studentService:StudentService,private router:Router){}
  HandleSubmit(){
    let obj={
      email:this.email,
      password:this.password
    }
    this.studentService.loginstudent(obj).subscribe((res)=>{
      console.log(res)
      if(res.msg=="login succesfull"){
        localStorage.setItem("token",res.token)
        localStorage.setItem("user",JSON.stringify(res.user))
        this.router.navigate(['/'])
      }
    })

  }


}
