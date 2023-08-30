import { Component} from '@angular/core';
import Swiper from 'swiper';

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

  constructor() {}

  

  

}
