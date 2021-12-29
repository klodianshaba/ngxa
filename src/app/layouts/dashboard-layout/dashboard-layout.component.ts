import { Component, OnInit } from '@angular/core';
import { Layouts } from "../../models";
import {zoomIn} from "../../animations/zooming-entrances";

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss'],
  animations: [
    zoomIn(),
  ]
})
export class DashboardLayoutComponent implements OnInit {

  public Layouts = Layouts;

  constructor() { }

  ngOnInit(): void {}

}
