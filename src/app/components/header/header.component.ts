import {Component, Input, OnInit , Output , EventEmitter} from '@angular/core';
import { Router } from "@angular/router";
import {Layouts} from "../../models/layout.model";
import {LayoutService} from "../../services/layout.service";
import {zoomIn} from "../../wrapper/animations/zoomIn";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations:[
    zoomIn()
  ]
})
export class HeaderComponent implements OnInit {

 @Input() layout: Layouts = Layouts.landing;

 @Output() onToggleSideBar: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    public layoutService: LayoutService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    console.log(this.layout);
    console.log(this.layoutService.isDashboard(this.layout));
  }

  onTitle(): void {
    this.router.navigate(['landing']).then();
  }

  onExamples(): void {
    this.router.navigate(['dashboard']).then();
  }

  onClickSibeBar(): void {
    this.onToggleSideBar.next(true);
  }

}
