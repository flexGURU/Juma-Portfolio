import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills = [
    {
      title: 'Cloud Architecture and Design',
      highlight: 
      ` I specialize in creating secure and scalable cloud architectures. 
        My expertise spans multi-cloud platforms like AWS, Azure, and Google Cloud. 
        I excel in designing hybrid environments that integrate seamlessly with on-premise systems. `
    },
    {
      title: 'Cloud-Native Applications',
      highlight: 
      ` I transform legacy monolithic applications into cloud-native, 
        microservices-based architectures. It involves containerization and 
        implementing serverless computing strategies and
        principles to enhance application resilience, scalability, and performance. `
    },
    {
      title: 'Cloud Cost Optimization ',
      highlight: 
      ` I specialize in optimizing cloud costs by 
        implementing effective resource allocation and utilizing pricing models tailored to business 
        needs. I provide cost analysis, monitor usage, and recommend strategies to reduce operational 
        expenses while ensuring high availability and scalability. `
    },
    {
      title: 'Cloud Security and Compliance ',
      highlight: 
      ` I develop comprehensive cloud security frameworks that go beyond standard compliance. 
        My expertise includes implementing zero-trust network architectures, designing advanced 
        identity and access management (IAM) solutions, creating encryption strategies, 
        and developing sophisticated threat detection and response mechanisms.`
    },

  ]

}
