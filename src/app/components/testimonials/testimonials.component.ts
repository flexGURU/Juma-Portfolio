import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {

  tests = [
    {
      title: 'Samson Wanjala',
      position: 'Technical Consultant @ BUI',
      imgPath: '../../../assets/samson.jpeg',
      content: 
      `James Juma Sindani is a true cloud transformation expert. 
      His ability to design complex multi-cloud architectures while maintaining robust security 
      is exceptional. He doesn't just implement solutions; he architects entire digital ecosystems.`,
      
    },
    {
      title: 'Albert Sitati',
      position: 'Cloud Engineer @ BUI',
      imgPath: '../../../assets/albert.jpeg',
      content: 
      `Working with James was a transformative experience. 
      He seamlessly integrated our legacy systems with cutting-edge cloud infrastructure, 
      reducing our operational costs by 35% and dramatically improving our overall 
      system performance.`,
      
    },
    {
      title: 'Awadh Said',
      position: 'Software Developer @ Kindred',
      imgPath: '../../../assets/Awadh.jpeg',
      content: 
      `James's expertise in AWS, Azure, and Google Cloud is remarkable. 
      He brought a level of strategic thinking to our cloud migration that went far beyond 
      technical implementation. His hybrid cloud solutions have been game-changing for our 
      organization.`,
      
    },
    {
      title: 'Nganga John Mukuna',
      position: 'Golang & Typescript Developer',
      imgPath: '../../../assets/mukuna.jpeg',
      content: 
      `What sets James apart is his holistic approach to cloud architecture. 
      He doesn't just focus on technical details, but understands how cloud strategy impacts 
      business outcomes. His solutions are both technically brilliant and strategically aligned.`,
      
    },

  ]

}
