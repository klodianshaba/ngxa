import { Component, OnInit } from '@angular/core';
import {StateService} from "../../services/state.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public sideNavStatus: boolean = false;
  constructor(private state: StateService) {
    this.state.sideNavStatus.subscribe(status => {
      this.sideNavStatus = status;
    });
  }
  ngOnInit(): void {}
}
