import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructorComponent } from './pages/instructor/instructor.component';
import { InstructorassignComponent } from './pages/instructorassign/instructorassign.component';
// import { HomeComponent } from './pages/home/home.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { StudentenrollComponent } from './pages/studentenroll/studentenroll.component';
import { AssignmentComponent } from './pages/assignment/assignment.component';
import { ParticularComponent } from './pages/particular/particular.component';
import { UserprofileComponent } from './pages/userprofile/userprofile.component';
import { AnnouncementComponent } from './pages/announcement/announcement.component';
import { GetannouncementComponent } from './pages/getannouncement/getannouncement.component';
import { CannouncementComponent } from './components/cannouncement/cannouncement.component';
import { authguardGuard } from './guards/authguard.guard';
import { CreatecourseComponent } from './components/createcourse/createcourse.component';
import { roleGuard } from './guards/role.guard';
import { SubmissionComponent } from './pages/submission/submission.component';


const routes: Routes = [
  
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'course',canActivate:[authguardGuard],component:StudentenrollComponent},
  {path:'assignment',canActivate:[authguardGuard],component:AssignmentComponent},
  {path:'particular',canActivate:[authguardGuard],component:ParticularComponent},
  {path:'instructor',canActivate:[authguardGuard],component:InstructorComponent},
  {path:'instructorassign',canActivate:[authguardGuard],component:InstructorassignComponent},
  {path:'userprofile',canActivate:[authguardGuard],component:UserprofileComponent},
  {path:'announcement',canActivate:[authguardGuard],component:AnnouncementComponent},
  {path:'getannouncement',canActivate:[authguardGuard],component:GetannouncementComponent},
  {path:'createannouncement',canActivate:[authguardGuard],component:CannouncementComponent},
  {path:'createcourse',canActivate:[authguardGuard],component:CreatecourseComponent},
  {path:'submission',canActivate:[authguardGuard],component:SubmissionComponent}

 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
