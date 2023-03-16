import { Component } from '@angular/core';

@Component({
  selector: 'app-p11',
  templateUrl: './p11.component.html',
  styleUrls: ['./p11.component.css']
})
export class P11Component {
  public a: number = 0;
  public b: number = 0;
  public result: number = 0;
  add() {
    this.result = this.a + this.b;
  }
  subtract() {
    this.result = this.a - this.b;
  }
  multiply() {
    this.result = this.a * this.b;
  }
  divide() {
    this.result = this.a / this.b;
  }
}
