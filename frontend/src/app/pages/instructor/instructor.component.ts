import { Component } from '@angular/core';
import { InstructorService } from 'src/app/service/instructor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.css']
})
export class InstructorComponent {
  datas:any[]=[]
  constructor(private instructorService:InstructorService,private router:Router){}
  ngOnInit(): void {
    this.getInstructorCourses()
  }

  getInstructorCourses(){
    this.instructorService.getInstructorCourse().subscribe((res)=>{
      this.datas=res.data
      console.log(res)
    })
  }
  HandleClick(id:any){
    localStorage.setItem('id',id)
    this.router.navigate(['/instructorassign'])
  }
}
