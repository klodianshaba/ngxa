import {Component, Input, OnInit , Output , EventEmitter} from '@angular/core';
import { Router } from "@angular/router";
import {Layouts} from "../../models/";
import {LayoutService} from "../../services/layout.service";
import {zoomIn} from "../../animations/zooming-entrances";
import {bounceIn} from "../../animations/bouncing-entrances";
import {listAnimateChild} from "../../animations/list";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations:[
    zoomIn(),
    bounceIn({timings:'1000ms'}),
    bounceIn({direction:'Left', timings:'1000ms',translate:'100px'}),
    bounceIn({direction:'Right', timings:'1000ms',translate:'100px'}),
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
