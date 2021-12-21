import { Component, OnInit } from '@angular/core';
import {zoomIn, zoomInClick} from "../../library/zoomIn";
import {bounceIn} from "../../library";

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
  animations: [
    zoomIn(),
    bounceIn(),
    zoomInClick(),
  ]
})
export class DescriptionComponent implements OnInit {

  status: boolean = false;
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
