import { Component,OnInit} from '@angular/core';
import { InstructorService } from 'src/app/service/instructor.service';
import { StudentService } from 'src/app/service/student.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  datas:any[]=[]
  isloading:boolean=true

  constructor(private instructorService:InstructorService,private studentService:StudentService){}
  ngOnInit(): void {
    this.getallcourse()
    this.getStudentcourse()
  }

  getallcourse(){
    this.instructorService.getAllCourse().subscribe((res)=>{
      this.datas=res.data
      this.isloading=false
    })
  }

  HandleClick(id:number){
    this.studentService.enrolCourse(id).subscribe((res)=>{
      if(res.msg=="You have enrolled successfully"){
        Swal.fire({
          'icon':'success',
          'title':`${res.msg}`,
          'text':'You have enrolled Successfully'
        })
        console.log(res)
      }else{
        console.log(res)
        Swal.fire({
          'icon':'error',
          'title':`${res.msg}`,
          'text':`${res.msg}`
        })
      }
    })
  }

  getStudentcourse(){
    this.studentService.getStudentCourse().subscribe((res)=>{
      console.log(res)
    })
  }



}
