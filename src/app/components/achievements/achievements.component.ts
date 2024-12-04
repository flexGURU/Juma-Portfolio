import { Component } from '@angular/core';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [],
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.css'
})
export class AchievementsComponent {

  navigate(){
    window.open('https://www.linkedin.com/company/resource-cloud-academy/', "_blank")
  }

  navigateTo(){
    window.open('https://www.theeastafrican.co.ke/tea/business-tech/phone-firms-turn-to-software-vending-4824524', "_blank")
  }
 



}
