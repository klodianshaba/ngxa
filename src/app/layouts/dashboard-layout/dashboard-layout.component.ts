import { Component, OnInit } from '@angular/core';
import { Layouts } from "../../models/layout.model";
import {zoomIn} from "../../wrapper";
import {
  animate,
  AnimationTriggerMetadata,
  keyframes,
  style,
  transition,
  trigger,
  group,
  query,
  animateChild,
  stagger
} from "@angular/animations";


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

  showFiller = false;

  constructor() { }

  ngOnInit(): void {

  }

}
