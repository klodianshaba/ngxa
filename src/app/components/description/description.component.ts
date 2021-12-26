import { Component, OnInit } from '@angular/core';
import {bounceIn,zoomIn} from "../../wrapper";
import {swing} from "../../wrapper/animations/attention-seekers";

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
  animations: [
    zoomIn({stateChangeExpressions:':enter, 0 => 1'}),
    bounceIn({stateChangeExpressions:':enter, 0 => 1'}),
    swing({stateChangeExpressions:':enter, 0 => 1'}),
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
