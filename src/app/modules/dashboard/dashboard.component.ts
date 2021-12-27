import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {listAnimateChild} from "../../wrapper";
import {AnimationModel} from "../../wrapper/animations/animations";
import {Animations, animations} from "../../wrapper/animations/animations";
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    listAnimateChild(),
    animations(),
 ]
})
export class DashboardComponent implements OnInit {

  public animations: AnimationModel[] = Animations;
  public animation: AnimationModel | undefined;

  constructor(private cdf: ChangeDetectorRef, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.queryParams.subscribe(params =>{
      this.animation = this.animations.find(item => item.triggerName === params['animation']);
      if(this.animation){
        this.onAnimateCard(this.animation);
      }
      this.checkActiveAnimation();
    });
  }

  ngOnInit(): void {}

  onAnimateCard(animation: AnimationModel): void{
    this.animation = this.animations.find(item => item.triggerName === animation.triggerName);
    if(this.animation) {
      this.animation.value = false;
      setTimeout(() => {
        if(this.animation) {
          this.animation.value = this.animation.triggerName;
          this.animation = Object.assign({}, this.animation);
        }
      }, 1);
    }
  }

  onAnimateCards(animation: AnimationModel): void{
    animation.value = false;
    setTimeout(() => {
      const index = this.animations.indexOf(animation);
      animation.value = animation.triggerName;
      this.animations[index] = Object.assign({}, this.animations[index]);
      },1);
  }

  onViewIt(animation: AnimationModel): void{
    this.router.navigate(['dashboard'],{queryParams:{animation:animation.triggerName}}).then();
  }
  onViewAnimations(){
    this.router.navigate(['dashboard']).then();
    this.animation = undefined;
    this.checkActiveAnimation();
  }

  checkActiveAnimation(): void{
    this.animations.map( item => {
        if(item.triggerName === this.animation?.triggerName){
          return Object.assign(item ,{active: true});
        }
        return Object.assign(item ,{active: false});
      }
    );
  }
}
