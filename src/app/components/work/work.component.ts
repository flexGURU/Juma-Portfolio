import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css',
})
export class WorkComponent {
  experiences = [
    {
      title: 'Solution Architect',
      company: 'Rainforest Alliance',
      duration: 'January 2025 - Present',
      type: 'Full-time',
      highlights: [
        'Develop and maintain the Rainforest Alliance Enterprise Solution Architecture to align with business strategies.',
        'Collaborate with cross-functional teams to ensure seamless adoption and integration of applications.',
        'Define and manage Solution Domains, inter-domain interfaces (APIs/microservices), and data flows.',
        'Support solution migration strategies, ensuring compliance with non-functional requirements.',
        'Oversee testing and quality reviews before deployment to business teams.',
      ],
    },
    {
      title: 'Cloud Solutions Architect',
      company: 'Huawei',
      duration: 'Jan 2024 - December 2024',
      type: 'Full Time',
      highlights: [
        'Drove CXO engagement to accelerate Huawei Cloud adoption and uncover new business opportunities.',
        'Developed and executed Huawei Cloud business strategies aligned with organizational goals.',
        'Identified and created business opportunities, providing pre-sales support and tailored advice to clients.',
        'Strengthened customer relationships through branding, technical support, and regional engagement.',
        'Integrated internal and external resources to achieve customer goals and foster win-win partnerships.',
      ],
    },

    {
      title: 'Cloud Solutions Architect',
      company: 'Silicon Overdrive',
      duration: 'Jan 2022 - December 2023',
      type: 'Full Time',
      highlights: [
        'Participated in architectural discussions to ensure solutions are designed for successful deployment in the cloud',
        'Created AWS Proposals in line with client requirements',
        'Captured and Architected secure, scalable, and highly available environments on AWS for clients following the principles of the AWS Well-Architected Framework',
        'Assisting the Sales and Engineering Teams to technically engage with clients by offering pre-sales assistance or advice where needed',
      ],
    },

    {
      title: 'Co-Founder & Partnership Manager',
      company: 'Resource Cloud Academy',
      duration: 'January 2022 - Present',
      type: 'Full Time',
      highlights: [
        'Offer free cloud resources to help the community members skill up.',
        'Lead the community in doing cloud-related projects on AWS and Azure Clouds.',
      ],
    },
    {
      title: 'Cloud Engineer',
      company: 'Spartec Consortium-Africa (SCA) Limited',
      duration: 'January 2022 - May 2022',
      type: 'Full Time',
      highlights: [
        'Offered clients and stakeholders advice on implementing their cloud adoption strategies across various cloud platforms.',
        'Guided new hires in the cloud department on acquiring skills in Cloud Security procedures.',
        'Participated in setting up Office 365 for clients.',
      ],
    },
    {
      title: 'AWS Architect',
      company: 'Azubi Africa',
      duration: 'January 2022 - May 2022',
      type: 'Apprenticeship',
      highlights: [
        'Trainee in AWS Cloud Practitioner and AWS Solutions Architect Associate.',
        'Familiar with using the AWS Management Console and AWS Command Line Interface.',
        'Understanding of the AWS Well-Architected Framework and the AWS global infrastructure.',
      ],
    },
  ];
}
