import { Component} from '@angular/core';
import Swiper from 'swiper';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isLoggedIn = false; // Set this based on login status
  // swiper: Swiper | undefined;
  userName = 'John Doe'; // Set the user's name

  isProfileDropdownOpen = false;

  data = JSON.parse(localStorage.getItem('user') || '[]');

  constructor(private router: Router) {}
  showname: string = '';
  toggleLogin: boolean = false;

  ngOnInit(): void {
    this.showname = this.showName();
    this.toggleLogin = this.data && this.data.name ? true : false;
    console.log(this.toggleLogin);
  }

  showName(): string {
    if (this.data && this.data.name) {
      console.log(this.data.name);
      return this.data.name;
    }
    return '';
  }

  rigisterRoute() {
    if (this.data.length == 0) {
      this.router.navigate(['/login']);
    }
  }
  logout(): void {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.showname = '';
    this.toggleLogin = false;
    Swal.fire({
      'icon':'success',
      'title':'Logout Successful',
      'text':'You have Logout Succesfully'
    })
    window.location.reload();
  }



  

  

}
