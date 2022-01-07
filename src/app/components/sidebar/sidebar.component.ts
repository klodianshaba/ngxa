import {AfterViewInit, Component, OnInit} from '@angular/core';
import {AnimationGroupModel, AnimationModel} from "../../models";
import {animations, AnimationGroups } from '../../config'
import {Router} from "@angular/router";
import {bounceIn} from "../../../../ngxa";
import {StateService} from "../../services/state.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    bounceIn({stateChangeExpressions: [':enter', '0 => 1'], direction:'Left', translate:'100px'}),
    animations(),
  ]
})
export class SidebarComponent implements OnInit, AfterViewInit {

  public groups: AnimationGroupModel[] = AnimationGroups;
  constructor(private router: Router, public state: StateService) {}

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

}
