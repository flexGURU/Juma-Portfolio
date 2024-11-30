import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  homes = 
    {
      content: 
      `Empowering businesses with seamless, scalable, and secure cloud solutions that drive 
      innovation and efficiency. Transforming complex challenges into simple, agile solutions for a 
      smarter, more connected future.`
    }

    navigate(){
      window.open('https://www.linkedin.com/in/james-juma-sindani/', "_blank")
    }
  

}

