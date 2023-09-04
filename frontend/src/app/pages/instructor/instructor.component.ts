import { Component,OnInit} from '@angular/core';
import { InstructorService } from 'src/app/service/instructor.service';
import { Router } from '@angular/router';
import { Course } from 'src/app/models/all.model';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.css']
})
export class InstructorComponent implements OnInit {
  datas:Course[]=[]
  isloading:boolean=true
  constructor(private instructorService:InstructorService,private router:Router){}
  ngOnInit(): void {
    this.getInstructorCourses()
  }

  getInstructorCourses(){
    this.instructorService.getInstructorCourse().subscribe((res:{data:Course[]})=>{
      this.datas=res.data
      this.isloading=false
      localStorage.setItem("instructordata",JSON.stringify(res.data))
      console.log(res)
    })
  }
  HandleClick(id:any){
    localStorage.setItem('id',id)
    this.router.navigate(['/instructorassign'])
  }
}
