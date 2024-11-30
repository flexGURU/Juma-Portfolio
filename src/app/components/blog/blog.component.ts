import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

  blogs = [
    {
      title: 'The Azubi Africa Cloud Wave',
      time: '4 min',
      imgPath: '../../../assets/azubi.jpg',
      route: 'https://www.linkedin.com/pulse/azubi-africa-cloud-wave-james-juma-sindani/',
      content: 
      `The cloud is a powerful tool that can help you accomplish your goals and missions. 
      But it's not just about the technology—you need to understand how the cloud can fit into your 
      business and what types of benefits are available. The cloud has different roles. 
      These roles include Cloud Architect, AWS Solutions Architect, Cloud Engineer, and AWS Developer.`
    },
    {
      title: 'Aws Cloud Roles',
      time: '3 min',
      imgPath: '../../../assets/roles.jpeg',
      route: 'https://www.linkedin.com/pulse/aws-cloud-roles-james-juma-sindani/',
      content: 
     `The cloud has changed how we work. It's no longer just a place where you can store your files. 
      It's a tool that allows you to create and grow your business, from anywhere in the world. 
      There are many different roles in AWS, and each of them plays a vital role in making sure that your organization is successful. 
      But what does it mean to be a cloud architect?`
},
    {
      title: 'Traditional Monolithic vs 3-Tier Architectures',
      time: '4 min',
      imgPath: '../../../assets/mon.jpeg',
      route: 'https://www.linkedin.com/pulse/traditional-monolithic-vs-3-tier-architectures-james-juma-sindani/',
      content: 
      `When it comes to building and deploying software, there are a variety of architectural patterns to choose from. 
      One popular option is the 3-tier architecture, which is a variation of the traditional monolithic architecture. In this post, we'll discuss the two architectures, highlighting their pros and cons.`
    }
  ]

  navigate(route){
    window.open(route, "_blank")

  }

}
