import { Component } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  name1: string = '';
  name2: string = '';

  get score(): number {
    let sum: number = 0;
    const letters: string = (this.name1 + this.name2).toLowerCase();
    for (let i = letters.length-1; i >= 0; i--) {
      sum += letters.charCodeAt(i);
    }
    return sum % 101;
  }

}
