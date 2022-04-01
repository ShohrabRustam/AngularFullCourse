import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css']
})
export class Task3Component implements OnInit {

  showSecret:boolean=false;
  constructor() { }


  ngOnInit(): void {
  }

  onToggleDetails()
  {
    // if(this.showSecret==false){
    //   this.showSecret=true;
    // }
    // else{
    // this.showSecret=false;
    // }

    this.showSecret=!this.showSecret;
  }

}
