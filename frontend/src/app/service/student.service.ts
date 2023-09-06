import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Assingment, User,Announcement,Submission} from '../models/all.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  token:string=localStorage.getItem("token")||""
  private url="https://edtech-backend-x3ix.onrender.com"
  constructor(private http:HttpClient) { }

  registerStudent(obj:User):Observable<any>{
    const url=`${this.url}/user/register`
    return this.http.post<any>(url,obj)
  }

  loginstudent(obj:User):Observable<any>{
    const url=`${this.url}/user/login`
    return this.http.post<any>(url,obj)
  }

  enrolCourse(id:number):Observable<any>{
    let headers=new HttpHeaders({
      Authorization:`Bearer ${this.token}`
    })
    const url=`${this.url}/enroll/createenrol/${id}`
    return this.http.post<any>(url,{},{headers})
  }

  getStudentCourse():Observable<any>{
    let headers=new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    })
    const url=`${this.url}/enroll/getenroldata`
    return this.http.get<any>(url,{headers})
  }

  getAllassignment():Observable<{data:Assingment[]}>{
    let headers=new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    })
    let url=`${this.url}/assignment/get`
    return this.http.get<{data:Assingment[]}>(url,{headers})
  }

  getParticular(id:any):Observable<{data:Assingment}>{
    let headers=new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    })
    const url=`${this.url}/assignment/see/${id}`
    return this.http.get<{data:Assingment}>(url,{headers})
  }
  SubmitAssign(obj:Submission,id:number):Observable<any>{
    let headers=new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    })
    const url=`${this.url}/submission/submit/${id}`
    return this.http.post<any>(url,obj,{headers})

  }
  getAnnouncement():Observable<{data:Announcement[]}>{
    let headers=new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    })
    const url=`${this.url}/announcement/get`
    return this.http.get<{data:Announcement[]}>(url,{headers})

  }
  urlhereChat='https://chatbot-e0x8.onrender.com'
  chatbotResponse(userrequest: any): Observable<any> {
    console.log('Request Made');
    return this.http.post<any>(`${this.urlhereChat}/chat`, userrequest);
  }



}
