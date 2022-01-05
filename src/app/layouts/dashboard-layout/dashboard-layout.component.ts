import {Component, HostListener, OnInit} from '@angular/core';
import { Layouts } from "../../models";
import {BreakpointObserver} from '@angular/cdk/layout';
@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss'],
  animations: []
})
export class DashboardLayoutComponent implements OnInit {
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    // event.target.innerWidth;
    this.isSmallScreen = this.breakpointObserver.isMatched('(max-width: 1010px)');
  }
  public isSmallScreen: boolean = this.breakpointObserver.isMatched('(max-width: 913px)');
  public Layouts = Layouts;
  constructor(private breakpointObserver: BreakpointObserver) {}
  ngOnInit(): void {}
}
