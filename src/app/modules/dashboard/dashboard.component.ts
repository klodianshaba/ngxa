import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {bounceIn, listAnimateChild, zoomIn} from "../../wrapper";
import {AnimationModel} from "../../wrapper/animations/animations";
import {Animations, animations} from "../../wrapper/animations/animations";
import {ActivatedRoute, Router} from "@angular/router";
import {heartBeat, swing} from "../../wrapper/animations/attention-seekers";
import {bounceInDown} from "../../wrapper/animations/bouncing-entrances/bounceInDown";
import {bounceInUp} from "../../wrapper/animations/bouncing-entrances/bounceInUp";
import {backIn} from "../../wrapper/animations/back-entrances/backIn";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    zoomIn({stateChangeExpressions:':enter, 0 => 1'}),
    bounceIn({stateChangeExpressions:':enter, 0 => 1'}),
    swing({stateChangeExpressions:':enter'}),
    listAnimateChild({timings:'300ms', stateChangeExpressions:':enter, 0 => 1'}),
    heartBeat({stateChangeExpressions:':enter, 0 => 1'}),
    swing({stateChangeExpressions:':enter, 0 => 1', timings:'1000ms'}),
    backIn({stateChangeExpressions:':enter, 0 => 1', direction:'Down', translate:'300px'}),
    bounceInDown({stateChangeExpressions:':enter', translate:'300px', timings:'1000ms'}),
    bounceInUp({stateChangeExpressions:':enter', translate:'300px', timings:'1000ms'}),
    animations(),
 ]
})
export class DashboardComponent implements OnInit {

  public animations: AnimationModel[] = Animations;
  public animation: AnimationModel | undefined = this.animations[3];


  constructor(private cdf: ChangeDetectorRef, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.queryParams.subscribe(params =>{
      if(params.hasOwnProperty('animation')){
        this.animation = this.animations.find(item => item.triggerName === params['animation']);
        if(this.animation){
          this.onAnimateCard(this.animation);
        }
      }else{
        this.router.navigate(['dashboard'], {queryParams: {animation: this.animation?.triggerName}}).then();
      }
      this.checkActiveAnimation();
    });
  }

  ngOnInit(): void {
  }

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

  onViewIt(animation: AnimationModel): void{
    this.router.navigate(['dashboard'],{queryParams:{animation:animation.triggerName}}).then();
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

  // onAnimateIt(animation: AnimationModel) {
  //   this.onAnimateCard(animation);
  //   this.status = false;
  //   setTimeout(() => {
  //     this.status = true;
  //   }, 1);
  // }
}
