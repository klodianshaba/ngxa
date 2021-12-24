import { Component, OnInit } from '@angular/core';
import {bounceIn,zoomIn} from "../../wrapper";

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
  animations: [
    zoomIn({stateChangeExpressions:':enter, 0 => 1'}),
    bounceIn(),
  ]
})
export class DescriptionComponent implements OnInit {

  status: boolean = true;
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
