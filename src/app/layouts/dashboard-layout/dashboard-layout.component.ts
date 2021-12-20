import { Component, OnInit } from '@angular/core';
import { Layouts } from "../../models/layout.model";

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent implements OnInit {

  public Layouts = Layouts;

  showFiller = false;

  constructor() { }

  ngOnInit(): void {

  }

}
