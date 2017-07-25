import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pin-signup',
  templateUrl: './pin-signup.component.html',
  styleUrls: ['./pin-signup.component.scss']
})
export class PinSignupComponent implements OnInit {

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
