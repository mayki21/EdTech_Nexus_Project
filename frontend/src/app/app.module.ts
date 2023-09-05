import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { StudentenrollComponent } from './pages/studentenroll/studentenroll.component';
import { HttpClientModule } from '@angular/common/http';
import { CoursenavbarComponent } from './components/coursenavbar/coursenavbar.component';
import { AssignmentComponent } from './pages/assignment/assignment.component';
import { ParticularComponent } from './pages/particular/particular.component';
import { InstructorComponent } from './pages/instructor/instructor.component';
import { InstructorassignComponent } from './pages/instructorassign/instructorassign.component';
import { CreateassignComponent } from './components/createassign/createassign.component';
import { LoaderComponent } from './components/loader/loader.component';
import { UserprofileComponent } from './pages/userprofile/userprofile.component';
import { MidsectionComponent } from './components/midsection/midsection.component';
import { AnnouncementComponent } from './pages/announcement/announcement.component';
import { GetannouncementComponent } from './pages/getannouncement/getannouncement.component';
import { CannouncementComponent } from './components/cannouncement/cannouncement.component';
import { BoxComponent } from './components/box/box.component';
import { BrandingComponent } from './components/branding/branding.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InstrnavbarComponent } from './components/instrnavbar/instrnavbar.component';
import { SubmissionComponent } from './pages/submission/submission.component';
import { CreatecourseComponent } from './components/createcourse/createcourse.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    StudentenrollComponent,
    CoursenavbarComponent,
    AssignmentComponent,
    ParticularComponent,
    InstructorComponent,
    InstructorassignComponent,
    CreateassignComponent,
    LoaderComponent,
    UserprofileComponent,
    MidsectionComponent,
    AnnouncementComponent,
    GetannouncementComponent,
    CannouncementComponent,
    BoxComponent,
    BrandingComponent,
    InstrnavbarComponent,
    SubmissionComponent,
    CreatecourseComponent,
    InstrnavbarComponent,
    ChatbotComponent

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
