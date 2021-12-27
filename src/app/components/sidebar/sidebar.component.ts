import { Component, OnInit } from '@angular/core';
import {zoomIn, bounceIn} from "../../wrapper";
import {AnimationModel } from "../../wrapper/animations/animations";
import {animations, Animations} from "../../wrapper/animations/animations";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    zoomIn(),
    bounceIn({stateChangeExpressions:[':enter', '0 => 1']}),
    animations(),
  ]
})
export class SidebarComponent implements OnInit {

  status:boolean = false;

  public animations: AnimationModel[] = Animations;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  animate() {
    this.status = false;
    setTimeout(() => {
      this.status = true;
    }, 1);
  }
  onHover(animation: AnimationModel): void{
    if(!animation.canAnimate) {
      this.onAnimateIt(animation);
    }
    animation.canAnimate = true;
  }
  onLeave(animation: AnimationModel): void{
     animation.canAnimate = false;
  }
  onClick(animation: AnimationModel): void{
    this.onAnimateIt(animation);
    this.router.navigate(['dashboard'],{queryParams:{animation:animation.triggerName}}).then();
  }

  onAnimateIt(animation: AnimationModel): void{
      animation.value = false;
      setTimeout(() => {
        const index = this.animations.indexOf(animation);
        animation.value = animation.triggerName;
        this.animations[index] = Object.assign({}, this.animations[index]);
      }, 1);
  }

}
