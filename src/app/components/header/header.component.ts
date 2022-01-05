import {Component, Input, OnInit , Output , EventEmitter} from '@angular/core';
import {Router} from "@angular/router";
import {Layouts} from "../../models/";
import {LayoutService} from "../../services/layout.service";
import {bounceIn} from "../../../../ngxa";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations:[
    bounceIn({direction:'Left', timings:'1s',translate:'500px'}),
    bounceIn({direction:'Right', timings:'1s',translate:'500px'}),
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
