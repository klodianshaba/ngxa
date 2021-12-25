import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {list, zoomIn, bounceIn} from "../../wrapper";
import {AnimationModel} from "../../models/animation.model";
import {swing,wobble,bounce,flash,headShake,heartBeat,jello} from "../../wrapper/animations/attention-seekers";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    list({timings:200}),
    bounceIn({stateChangeExpressions:[':enter', '0 => 1']}),
    zoomIn({stateChangeExpressions:[':enter', '0 => 1']}),
    swing({stateChangeExpressions:[':enter', '0 => 1']}),
    wobble({stateChangeExpressions:[':enter', '0 => 1']}),
    bounce({stateChangeExpressions:[':enter', '0 => 1']}),
    flash({stateChangeExpressions:[':enter', '0 => 1'], timings:'1000ms'}),
    headShake({stateChangeExpressions:[':enter', '0 => 1']}),
    heartBeat({stateChangeExpressions:[':enter', '0 => 1']}),
    jello({stateChangeExpressions:[':enter', '0 => 1']})
,  ]
})
export class DashboardComponent implements OnInit {

  bounceIn: string = 'bounceIn';
  public animations: AnimationModel[] = [
    {triggerName:'bounceIn', value: true ,params:{}},
    {triggerName:'zoomIn', value: true ,params:{}},
    {triggerName:'swing', value: true ,params:{}},
    {triggerName:'wobble', value: true ,params:{}},
    {triggerName:'bounce', value: true ,params:{}},
    {triggerName:'flash', value: true ,params:{}},
    {triggerName:'headShake', value: true ,params:{}},
    {triggerName:'heartBeat', value: true ,params:{}},
    {triggerName:'jello', value: true ,params:{}},
  ];

  constructor(private cdf: ChangeDetectorRef) { }

  ngOnInit(): void {}
  onAnimateIt(animation: AnimationModel): void{
    const index = this.animations.indexOf(animation);
    this.animations[index].value = false;
    this.animations[index]= Object.assign({}, this.animations[index]);
    setTimeout(() => {
      this.animations[index].value = true;
      this.animations[index]= Object.assign({}, this.animations[index]);
    },1);
  }



}
