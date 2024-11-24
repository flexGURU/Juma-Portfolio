import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent  {
  isMenuOpen = false;

  toggle(e){
    console.log(e);
    this.isMenuOpen = !this.isMenuOpen
    
  }


}
