import { Component, OnInit } from '@angular/core';
import {bounceIn} from "../../library";
import {trigger} from "@angular/animations";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    bounceIn()
  ]
})
export class DashboardComponent implements OnInit {

  public ani: boolean = false;

  constructor() { }



  ngOnInit(): void {
  }
  onClick(): void{
    this.ani = true;
    setTimeout(()=>{
      this.ani = false;
    },800);
  }

}
