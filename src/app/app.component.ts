import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  firstDayOfWork: Date;
  salary: number;
  bonusDates: Date[] = [];

  calculateBonusDates() {
    this.bonusDates = [];

    // Calculate first bonus date
    let firstBonusDate = new Date(this.firstDayOfWork);
    firstBonusDate.setMonth(firstBonusDate.getMonth() + 15); // First bonus after 15 months
    this.bonusDates.push(firstBonusDate);

    // Calculate subsequent bonus dates
    let nextBonusDate = new Date(firstBonusDate);
    while (nextBonusDate <= new Date()) {
      nextBonusDate.setFullYear(nextBonusDate.getFullYear() + 1); // Add one year
      this.bonusDates.push(new Date(nextBonusDate)); // Add bonus date to array
    }
  }

}
