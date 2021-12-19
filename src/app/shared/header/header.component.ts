import {Component, Input, OnInit} from '@angular/core';
import {Layouts} from "../../models/layout.model";
import {LayoutService} from "../../services/layout.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

 @Input() layout: Layouts = Layouts.landing;

  constructor(private layoutService: LayoutService) {
  }

  ngOnInit(): void {
    console.log(this.layout);
    console.log(this.layoutService.isDashboard(this.layout));
  }

}
