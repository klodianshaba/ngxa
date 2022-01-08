import { Component, OnInit } from '@angular/core';
import {swing, zoomIn, staggerNestedAnimations, jackInTheBox, bounceIn} from "../../../../ngxa";

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
  animations: [
    zoomIn({stateChangeExpressions:':enter, 0 => 1', timings:'1s', direction: 'Down'}),
    swing({stateChangeExpressions:':enter, 0 => 1'}),
    bounceIn({ direction:'Left', stateChangeExpressions:':enter, 0 => 1',timings:'1s'}),
    staggerNestedAnimations({timings:'300ms', stateChangeExpressions:':enter, 0 => 1'}),
  ]
})
export class DescriptionComponent implements OnInit {
  status: boolean = true;
  constructor() { }
  ngOnInit(): void {}
  onAnimateIt() {
    this.status = false;
    setTimeout(() => {
      this.status = true;
    }, 1);
  }
}
