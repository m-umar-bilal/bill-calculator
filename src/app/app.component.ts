import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'bill-calculator';
  package_ = "Free";
  cycle = "Monthly";
  nusers = 1;
  cost = 0;
  total = 0;
  discount = 0;
  verdict = ""
  cycleString = {
    "Monthly": "month",
    "Annual": "yearly",
  };
  packages = {
    "Free": 0,
    "Starter": 50,
    "Premium": 100
  };
  discounts = {
    "Annual": 0.2,
    "Monthly": 0
  };

  constructor() {
  }

  ngOnInit(): void {
  }


  calculateTotal() {
    this.cost = this.packages[this.package_];
    this.verdict = this.cycleString[this.cycle];
    this.total = 0;
    this.discount = 0;
    if (this.cycle === "Annual") {
      this.total = ((this.packages[this.package_] * 12) * this.nusers);
      this.discount = this.total * this.discounts[this.cycle];
      this.total = this.total - this.discount;
    } else {
      this.total = (this.packages[this.package_] * this.nusers)

    }
  }
}
