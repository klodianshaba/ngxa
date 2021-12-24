import { Component, OnInit } from '@angular/core';
import {trigger} from "@angular/animations";
import {list, zoomIn, bounceIn} from "../../wrapper";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    bounceIn({stateChangeExpressions:[':enter', '0 => 1']}),
    list({timings:100}),
    zoomIn()
  ]
})
export class DashboardComponent implements OnInit {

  public ani: boolean = false;
  bounceIn: string = 'bounceIn';
  constructor() { }

  ngOnInit(): void {}
  onClick(): void{
    this.ani = false;
    setTimeout(()=>{
      this.ani = true;
    },1);
  }



}
