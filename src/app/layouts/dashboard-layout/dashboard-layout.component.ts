import {Component, HostListener, OnInit} from '@angular/core';
import { Layouts } from "../../models";
import {BreakpointObserver} from '@angular/cdk/layout';
import {StateService} from "../../services/state.service";
@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss'],
  animations: []
})
export class DashboardLayoutComponent implements OnInit {
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.state.isSmallScreen.next(this.breakpointObserver.isMatched('(max-width: 1100px)'));
  }
  public isSmallScreen: boolean = false;
  public Layouts = Layouts;
  public sideNavStatus: boolean = false;
  constructor(private breakpointObserver: BreakpointObserver, private state: StateService) {
    this.state.isSmallScreen.next(this.breakpointObserver.isMatched('(max-width: 1100px)'));
    this.state.sideNavStatus.subscribe(status => {
      this.sideNavStatus = status;
    });
    this.state.isSmallScreen.subscribe(status => {
      this.isSmallScreen = status;
    });
  }
  ngOnInit(): void {}
  onChangeSideNav(status: boolean): void{
    this.state.sideNavStatus.next(status);
  }
}
