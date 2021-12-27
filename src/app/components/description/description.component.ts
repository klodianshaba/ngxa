import { Component, OnInit } from '@angular/core';
import {bounceIn, listAnimateChild, zoomIn} from "../../wrapper";
import {heartBeat, swing} from "../../wrapper/animations/attention-seekers";

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
  animations: [
    zoomIn({stateChangeExpressions:':enter, 0 => 1'}),
    bounceIn({stateChangeExpressions:':enter, 0 => 1'}),
    swing({stateChangeExpressions:':enter, 0 => 1'}),
    listAnimateChild({timings:'300ms', stateChangeExpressions:':enter, 0 => 1'}),
    heartBeat({stateChangeExpressions:':enter, 0 => 1'}),
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
