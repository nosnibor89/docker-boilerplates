import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  positionWizard: number;

  constructor() { }

  ngOnInit() {
    this.positionWizard = 2;
  }

  nexWizard() {
    if (this.positionWizard !== 2) {
      this.positionWizard = this.positionWizard + 1;
    }
  }

  backWizard() {
    if (this.positionWizard !== 0) {
      this.positionWizard = this.positionWizard - 1;
    }
  }
}
