import {Component, Input, OnInit , Output , EventEmitter} from '@angular/core';
import {Router} from "@angular/router";
import {Layouts} from "../../models/";
import {LayoutService} from "../../services/layout.service";
import {bounceIn, slideIn, slideOut, swing} from "../../../../ngxa";
import {StateService} from "../../services/state.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations:[
    slideIn({direction:'Left', timings:'0.3s',translate:'260px'}),
    slideOut({stateChangeExpressions:':leave', direction:'Left', timings:'0.3s',translate:'260px'}),
    bounceIn({direction:'Left', timings:'1s',translate:'500px'}),
  ]
})
export class HeaderComponent implements OnInit {
 @Input() layout: Layouts = Layouts.landing;
 @Output() onToggleSideBar: EventEmitter<boolean> = new EventEmitter<boolean>();
 public sideNavStatus: boolean = false;
 public isSmallScreen: boolean = false;
 public title = 'NIMATIONS';

 constructor(public layoutService: LayoutService, private router: Router, public state: StateService) {
   this.state.sideNavStatus.subscribe(status => {
     this.sideNavStatus = status;
   });
   this.state.isSmallScreen.subscribe(status => {
     this.isSmallScreen = status;
   });
 }

  ngOnInit(): void {}
  onClickSideBar(): void {
    this.onToggleSideBar.next(true);
  }
  onNgxa(): void{
   this.router.navigate(['']).then();
  }
}
