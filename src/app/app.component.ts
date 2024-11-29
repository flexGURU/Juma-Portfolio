import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { WorkComponent } from "./components/work/work.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { TalksComponent } from "./components/talks/talks.component";
import { BlogComponent } from './components/blog/blog.component';
import { TestimonialsComponent } from "./components/testimonials/testimonials.component";
import { ContactComponent } from "./components/contact/contact.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent, HomeComponent, 
    AboutComponent, WorkComponent, SkillsComponent, 
    TalksComponent, BlogComponent, TestimonialsComponent, 
    ContactComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  title = 'James Juma';


  constructor(private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRoute.fragment.subscribe((fragment) => {
      console.log(fragment);
      this.scrollToPage(fragment)
      
    })
      
  }

  scrollToPage(fragment){
    const element = document.getElementById(fragment)
    element.scrollIntoView({
      behavior: 'smooth'
    })

  }

  
  
}
