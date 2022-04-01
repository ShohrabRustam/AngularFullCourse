import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css']
})
export class Task3Component implements OnInit {

  showSecret: boolean = false;
  array = [1];
  constructor() { }

  ngOnInit(): void {
  }

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    this.array.push(this.array.length+1);

  }

}
