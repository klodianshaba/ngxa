import {HostListener, Injectable} from '@angular/core';
import { BehaviorSubject, Subject } from "rxjs";
import {BreakpointObserver} from "@angular/cdk/layout";

@Injectable({
  providedIn: 'root'
})
export class StateService {

  public sideNavStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isSmallScreen: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private breakpointObserver: BreakpointObserver) { }
}
