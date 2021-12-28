import {Component, Input, OnInit , Output , EventEmitter} from '@angular/core';
import { Router } from "@angular/router";
import {Layouts} from "../../models/layout.model";
import {LayoutService} from "../../services/layout.service";
import {bounceIn, listAnimateChild, zoomIn} from "../../wrapper";
import {bounceInRight} from "../../wrapper/animations/bouncing-entrances/bounceInRight";
import {bounceInLeft} from "../../wrapper/animations/bouncing-entrances/bounceInLeft";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations:[
    zoomIn(),
    bounceIn({timings:'1000ms'}),
    bounceInRight({timings:'1000ms',translate:'100px'}),
    bounceInLeft({timings:'1000ms',translate:'100px'}),
    listAnimateChild({timings:'500ms'}),
  ]
})
export class HeaderComponent implements OnInit {

 @Input() layout: Layouts = Layouts.landing;
 @Output() onToggleSideBar: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(public layoutService: LayoutService, private router: Router) {}

  ngOnInit(): void {}

  onClickSideBar(): void {
    this.onToggleSideBar.next(true);
  }

}
