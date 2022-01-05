import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AnimationGroupModel, AnimationModel} from "../../models";
import {ActivatedRoute, Router} from "@angular/router";
import {animations, AnimationGroups} from '../../config'
import {bounceIn} from "../../../../ngxa";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    bounceIn({stateChangeExpressions:':enter', direction:'Down', translate:'300px', timings:'1000ms'}),
    bounceIn({stateChangeExpressions:':enter', direction:'Up', translate:'300px', timings:'1000ms'}),
    animations(),
 ]
})
export class DashboardComponent implements OnInit {

  public groups: AnimationGroupModel[] = AnimationGroups;

  public animation: AnimationModel | undefined = this.findAnimation('zoomInDown');

  constructor(private cdf: ChangeDetectorRef, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.queryParams.subscribe(params => {
      if(params.hasOwnProperty('animation')){
        this.animation = this.findAnimation(params['animation']);
        if(this.animation){
          this.onAnimateCard(this.animation);
        }
      }else{
        this.router.navigate(['dashboard'], {queryParams: {animation: this.animation?.triggerName}}).then();
      }
      this.checkActiveAnimation();
    });
  }

  ngOnInit(): void {}

  findAnimation(name: string): AnimationModel | undefined{
    let animation:AnimationModel | undefined;
    this.groups.forEach(group => {
      if(!animation) {
         animation = group.animations.find(animation => animation.triggerName === name)
      }
    });
    return animation;
  }

  onAnimateCard(animation: AnimationModel): void{
    this.animation = this.findAnimation(animation.triggerName);
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

  onViewIt(animation: AnimationModel): void{
    this.router.navigate(['dashboard'],{queryParams:{animation:animation.triggerName}}).then();
  }

  checkActiveAnimation(): void{
    this.groups.map(group => group.animations.map( item => {
        if(item.triggerName === this.animation?.triggerName){
          return Object.assign(item ,{active: true});
        }
        return Object.assign(item ,{active: false});
      }
    )
  );
  }
}
