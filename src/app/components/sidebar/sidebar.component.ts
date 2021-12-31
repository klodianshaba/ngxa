import {AfterViewInit, Component, OnInit} from '@angular/core';
import {AnimationGroupModel, AnimationModel, AnimationGroups, animations} from "../../models";
import {Router} from "@angular/router";
import {zoomIn} from "../../animations/zooming-entrances";
import {bounceIn} from "../../animations/bouncing-entrances";
import {listAnimateChild} from "../../animations/list";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    zoomIn(),
    bounceIn({stateChangeExpressions: [':enter', '0 => 1']}), // bounceIn trigger
    bounceIn({stateChangeExpressions: [':enter', '0 => 1'], direction:'Left', translate:'100px'}), // bounceInLeft trigger
    animations(),
    listAnimateChild({timings:'100ms', stateChangeExpressions:':enter, 0 => 1'}),
  ]
})
export class SidebarComponent implements OnInit, AfterViewInit {

  public groups: AnimationGroupModel[] = AnimationGroups;

  constructor(private router: Router) { }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const el =  document.getElementById("active-animation");
    el?.parentElement?.scrollIntoView({behavior:'smooth'});
  }


  onClick(groupIndex: number, animation: AnimationModel): void{
    this.onAnimateIt(groupIndex,animation);
    this.router.navigate(['dashboard'],{queryParams:{animation:animation.triggerName}}).then();
  }

  onAnimateIt(groupIndex: number,animation: AnimationModel): void{
      animation.value = false;
      setTimeout(() => {
        const index = this.groups[groupIndex].animations.indexOf(animation);
        animation.value = animation.triggerName;
        this.groups[groupIndex].animations[index] = Object.assign({}, animation);
      }, 1);
  }

  // onHover(groupIndex: number, animation: AnimationModel): void{
  //   if(!animation.canAnimate) {
  //     this.onAnimateIt(groupIndex,animation);
  //   }
  //   animation.canAnimate = true;
  // }
  // onLeave(groupIndex: number, animation: AnimationModel): void {
  //    animation.canAnimate = false;
  // }

}
