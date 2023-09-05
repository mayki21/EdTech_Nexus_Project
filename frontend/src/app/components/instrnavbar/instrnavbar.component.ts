import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instrnavbar',
  templateUrl: './instrnavbar.component.html',
  styleUrls: ['./instrnavbar.component.css']
})
export class InstrnavbarComponent {
  constructor(private router:Router){}
  HandleClick(){
    localStorage.clear()
    this.router.navigate(['/']).then(()=>{
      window.location.reload()
    })

  }
}
