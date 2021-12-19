import {Injectable} from '@angular/core';
import {Layouts} from "../models/layout.model";

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  constructor() { }

  isLanding(layout: Layouts): boolean {
   return (layout === Layouts.landing);
  }
  isDashboard(layout: Layouts): boolean {
    return (layout !== Layouts.landing);
  }
}
