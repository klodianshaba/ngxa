import {Component, Input, OnInit , Output , EventEmitter} from '@angular/core';
import { Router } from "@angular/router";
import {Layouts} from "../../models/";
import {LayoutService} from "../../services/layout.service";
import {zoomIn, bounceIn, listAnimateChild, lightspeedIn, rotateIn} from "../../../../ngxa";

import {AnimationConfig} from "../../../../ngxa/common";
import {animate, animation, AnimationTriggerMetadata, keyframes, style} from "@angular/animations";
import {buildTrigger} from "../../../../ngxa/base";
export const fadeAnimation = (animationConfig?: Partial<AnimationConfig>): AnimationTriggerMetadata => {
  return buildTrigger({
    triggerName: (animationConfig && animationConfig.triggerName) || 'fade',
    transitions: {
      animationReferenceMetadata:
        animation(
          animate(
            '{{timings}}',
            keyframes([
              style({opacity: 0, offset: 0}),
              style({opacity: 1, offset: 1}),
            ])
          )
        ),
      animationConfig,
      animationOptions: {params: {timings: '500ms'}}
    }
  });
};

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations:[
    zoomIn(),
    zoomIn({direction:'Left', translate:'200px'}),
    bounceIn({timings:'1000ms'}),
    bounceIn({direction:'Left', timings:'1s',translate:'500px'}),
    bounceIn({direction:'Right', timings:'1s',translate:'500px'}),
    lightspeedIn({direction:'Left',translate:'100px'}),
    lightspeedIn({direction:'Right' ,translate:'100px'}),
    rotateIn({direction:'DownLeft'}),
    rotateIn({direction:'DownRight'}),
    listAnimateChild(),
    fadeAnimation({timings:'0.3s', stateChangeExpressions: [':enter', '0 => 1'], triggerName: 'fadeAnimation'} ) // use fadeAnimation and overwrite optional configs
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
