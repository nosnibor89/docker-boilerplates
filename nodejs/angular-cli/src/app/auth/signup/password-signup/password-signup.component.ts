import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-password-signup',
  templateUrl: './password-signup.component.html',
  styleUrls: ['./password-signup.component.scss']
})
export class PasswordSignupComponent implements OnInit {

  @Output() back = new EventEmitter();
  @Output() continue = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  nexStep() {
    this.continue.emit(null);
  }

  bacStep() {
    this.back.emit(null);
  }

}
