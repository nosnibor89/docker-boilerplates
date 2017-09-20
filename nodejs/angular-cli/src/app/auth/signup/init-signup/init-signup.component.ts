import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-init-signup',
  templateUrl: './init-signup.component.html',
  styleUrls: ['./init-signup.component.scss']
})
export class InitSignupComponent implements OnInit {

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
