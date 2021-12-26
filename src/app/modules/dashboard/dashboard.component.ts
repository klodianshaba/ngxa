import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { zoomIn, bounceIn, listAnimateChild} from "../../wrapper";
import {AnimationModel} from "../../models/animation.model";
import {swing,wobble,bounce,flash,headShake,heartBeat,jello} from "../../wrapper/animations/attention-seekers";
import {animations} from "../../wrapper/animations/animations";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    listAnimateChild(),
    // bounceIn({stateChangeExpressions:[':enter', '0 => 1']}),
    // zoomIn({stateChangeExpressions:[':enter', '0 => 1']}),
    // swing({stateChangeExpressions:[':enter', '0 => 1']}),
    // wobble({stateChangeExpressions:[':enter', '0 => 1']}),
    // bounce({stateChangeExpressions:[':enter', '0 => 1']}),
    // flash({stateChangeExpressions:[':enter', '0 => 1'], timings:'1000ms'}),
    // headShake({stateChangeExpressions:[':enter', '0 => 1']}),
    // heartBeat({stateChangeExpressions:[':enter', '0 => 1']}),
    // jello({stateChangeExpressions:[':enter', '0 => 1']}),

    animations({stateChangeExpressions:':enter, 0 => 1'}),
 ]
})
export class DashboardComponent implements OnInit {

  bounceIn: string = 'bounceIn';
  public animations: AnimationModel[] = [
    {triggerName:'zoomIn', value: 'zoomIn' ,params:{}},
    {triggerName:'bounceIn', value: 'bounceIn' ,params:{}},
    {triggerName:'swing', value: 'swing' ,params:{}},
    {triggerName:'bounce', value: 'bounce' ,params:{}},
    {triggerName:'flash', value: 'flash' ,params:{}},
    {triggerName:'headShake', value: 'headShake' ,params:{}},
    {triggerName:'heartBeat', value: 'heartBeat' ,params:{}},
    {triggerName:'jello', value: 'jello' ,params:{}},
  ];

  constructor(private cdf: ChangeDetectorRef) { }

  ngOnInit(): void {}
  onAnimateIt(animation: AnimationModel): void{
    animation.value = false;
    setTimeout(() => {
      const index = this.animations.indexOf(animation);
      animation.value = animation.triggerName;
      this.animations[index] = Object.assign({}, this.animations[index]);
    },1);
  }



}
