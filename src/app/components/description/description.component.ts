import { Component, OnInit } from '@angular/core';
import {heartBeat, swing} from "../../animations/attention-seekers";
import {backIn} from "../../animations/back-entrances/";
import {zoomIn} from "../../animations/zooming-entrances";
import {bounceIn} from "../../animations/bouncing-entrances";
import {listAnimateChild} from "../../animations/list";

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
  animations: [
    zoomIn({stateChangeExpressions:':enter, 0 => 1'}),
    zoomIn({stateChangeExpressions:':enter, 0 => 1', timings:'1s', direction: 'Down'}),
    bounceIn({stateChangeExpressions:':enter, 0 => 1'}),
    swing({stateChangeExpressions:':enter, 0 => 1'}),
    listAnimateChild({timings:'300ms', stateChangeExpressions:':enter, 0 => 1'}),
    heartBeat({stateChangeExpressions:':enter, 0 => 1'}),
    swing({stateChangeExpressions:':enter, 0 => 1'}),
    backIn({stateChangeExpressions:':enter, 0 => 1', direction:'Down', translate:'200px'}),
  ]
})
export class DescriptionComponent implements OnInit {

  status: boolean = true;
  constructor() { }

  ngOnInit(): void {}

  animate() {
    this.status = false;
    setTimeout(() => {
      this.status = true;
    }, 1);
  }

}
