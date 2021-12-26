import { Component, OnInit } from '@angular/core';
import {zoomIn, bounceIn} from "../../wrapper";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    zoomIn(),
    bounceIn({stateChangeExpressions:[':enter', '0 => 1']})
  ]
})
export class SidebarComponent implements OnInit {

  status:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  animate() {
    this.status = false;
    setTimeout(() => {
      this.status = true;
    }, 1);
  }

}
