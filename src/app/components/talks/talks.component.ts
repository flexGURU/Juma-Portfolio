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

  tubeVids = [
    {
      src: 'https://www.youtube.com/embed/FyYHRPCrpMo',
      title: 'Cloud Force sky bootcamp'
    },
    {
      src: 'https://www.youtube.com/embed/9st7RVY7kdA',
      title: 'AWS user group part one'
    },
    {
      src: 'https://www.youtube.com/embed/btA7H5m6sIQ',
      title: 'AWS usergroup part two'
    },
    {
      src: 'https://www.youtube.com/embed/tyFfmFSAQwQ',
      title: 'IT Career sessions with Kevin'
    }
  ]

  
 

}
