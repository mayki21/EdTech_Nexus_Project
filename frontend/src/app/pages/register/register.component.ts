import { Component } from '@angular/core';
import { StudentService } from 'src/app/service/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username!:string
  email!:string
  password!:string
  constructor(private studentService:StudentService,private router:Router){}
  HandleSubmit(){
    let obj={
      username:this.username,
      email:this.email,
      password:this.password
    }
    this.studentService.registerStudent(obj).subscribe((res)=>{
      console.log(res)
      if(res.msg=="login succesfull"){
        this.router.navigate(['/'])
      }
    })

  }
}
