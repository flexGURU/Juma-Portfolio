import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-talks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './talks.component.html',
  styleUrl: './talks.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TalksComponent {

  imgPathLg = [
    
      '../../../assets/3.jpg',
      '../../../assets/4.jpg',
      '../../../assets/5.jpg',
      '../../../assets/6.jpg',
      '../../../assets/52.jpg',
      '../../../assets/7.jpg',
      '../../../assets/8.jpg'
    
  ]

  imgPathSm = [
     '../../../assets/1.jpg',
     '../../../assets/2.jpg',
     '../../../assets/3.jpg',
    '../../../assets/4.jpg',
    '../../../assets/5.jpg',
    '../../../assets/6.jpg',
    '../../../assets/52.jpg',
    '../../../assets/7.jpg',
    '../../../assets/8.jpg'
  
]


 

}
