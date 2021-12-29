import {AnimationTriggerMetadata} from "@angular/animations";
import {buildTrigger} from "../base";
import {AnimationConfig} from "../common";
import {bounceInTransition} from "./bouncing-entrances/bounceIn";
import {zoomInTransition} from "./zoomIn";
import {bounceTransition, flashTransition, headShakeTransition, heartBeatTransition, jelloTransition, swingTransition, wobbleTransition} from "./attention-seekers";
import {pulseTransition} from "./attention-seekers/pulse";
import {rubberBandTransition} from "./attention-seekers/rubber-band";
import {shakeTransition} from "./attention-seekers/shake";
import {AnimationOptions} from "@angular/animations";
import {tadaTransition} from "./attention-seekers/tada";
import {bounceInUpTransition} from "./bouncing-entrances/bounceInUp";
import {bounceInRightTransition} from "./bouncing-entrances/bounceInRight";
import {bounceInLeftTransition} from "./bouncing-entrances/bounceInLeft";
import {bounceInDownTransition} from "./bouncing-entrances/bounceInDown";
import {backInTransition} from "./back-entrances/backIn";
import {backOutTransition} from "./back-exits/backOut";

export interface AnimationModel{
  triggerName:string,
  value: string | number | boolean,
  params: AnimationOptions | null,
  canAnimate: boolean,
  active: boolean
}
export interface AnimationGroupModel{
  id: number;
  name: string;
  animations: AnimationModel[]
}

export const AnimationGroups: AnimationGroupModel[] = [
  {
    id:1, name: 'Attention seekers',
    animations: [
      {triggerName:'bounce', value: 'bounce' ,params:{}, canAnimate: false,active: false},
      {triggerName:'flash', value: 'flash' ,params:{}, canAnimate: false,active: false},
      {triggerName:'pulse', value: 'pulse' ,params:{}, canAnimate: false,active: false},
      {triggerName:'rubberBand', value: 'rubberBand' ,params:{}, canAnimate: false,active: false},
      {triggerName:'shake', value: 'shake' ,params:{}, canAnimate: false,active: false},
      {triggerName:'headShake', value: 'headShake' ,params:{}, canAnimate: false,active: false},
      {triggerName:'swing', value: 'swing' ,params:{}, canAnimate: false,active: false},
      {triggerName:'tada', value: 'tada' ,params:{}, canAnimate: false,active: false},
      {triggerName:'wobble', value: 'wobble' ,params:{}, canAnimate: false,active: false},
      {triggerName:'jello', value: 'jello' ,params:{}, canAnimate: false,active: false},
      {triggerName:'heartBeat', value: 'heartBeat' ,params:{}, canAnimate: false,active: false},
    ]
  },
  { id:2, name: 'Back entrances', animations: [
      {triggerName:'backInDown', value: 'backInDown' ,params:{}, canAnimate: false,active: false},
      {triggerName:'backInLeft', value: 'backInLeft' ,params:{}, canAnimate: false,active: false},
      {triggerName:'backInRight', value: 'backInRight' ,params:{}, canAnimate: false,active: false},
      {triggerName:'backInUp', value: 'backInUp' ,params:{}, canAnimate: false,active: false},
    ]
  },
  { id:3, name: 'Back exits', animations: [
      {triggerName:'backOutUp', value: 'backOutUp' ,params:{}, canAnimate: false,active: false},
      {triggerName:'backOutDown', value: 'backOutDown' ,params:{}, canAnimate: false,active: false},
      {triggerName:'backOutLeft', value: 'backOutLeft' ,params:{}, canAnimate: false,active: false},
      {triggerName:'backOutRight', value: 'backOutRight' ,params:{}, canAnimate: false,active: false},
    ] },
  {
    id:4, name: 'Bouncing entrances',
    animations: [
      {triggerName:'bounceIn', value: 'bounceIn' ,params:{}, canAnimate: false,active: false},
      {triggerName:'bounceInRight', value: 'bounceInRight' ,params:{}, canAnimate: false,active: false},
      {triggerName:'bounceInLeft', value: 'bounceInRight' ,params:{}, canAnimate: false,active: false},
      {triggerName:'bounceInUp', value: 'bounceInUp' ,params:{}, canAnimate: false,active: false},
      {triggerName:'bounceInDown', value: 'bounceInDown' ,params:{}, canAnimate: false,active: false},
    ]
  },
  { id:5, name: 'Bouncing exits', animations: [] },
  { id:6, name: 'Fading entrances', animations: [] },
  { id:7, name: 'Fading exits', animations: [] },
  { id:8, name: 'Flippers', animations: [] },
  { id:9, name: 'Lightspeed', animations: [] },
  { id:10, name: 'Rotating entrances', animations: [] },
  { id:11, name: 'Rotating exits', animations: [] },
  { id:12, name: 'Specials', animations: [] },
  {
    id:13, name: 'Zooming entrances',
    animations: [
      {triggerName:'zoomIn', value: 'zoomIn' ,params:{}, canAnimate: false, active: false},
    ]
  },
  { id:14, name: 'Zooming exits', animations: [] },
  { id:15, name: 'Sliding entrances', animations: [] },
  { id:16, name: 'Sliding exits', animations: [] },
]

export function animations(config?: Partial<AnimationConfig>): AnimationTriggerMetadata{
  return buildTrigger(
    {
      triggerName: (config && config.triggerName) || 'animations',
      transitions: [
        zoomInTransition({...config, ...{stateChangeExpressions:'* => zoomIn'}}),
        swingTransition({...config, ...{stateChangeExpressions:'* => swing'}}),
        bounceTransition({...config, ...{stateChangeExpressions:'* => bounce'}}),
        flashTransition({...config, ...{stateChangeExpressions:'* => flash'}}),
        headShakeTransition({...config, ...{stateChangeExpressions:'* => headShake'}}),
        heartBeatTransition({...config, ...{stateChangeExpressions:'* => heartBeat'}}),
        jelloTransition({...config, ...{stateChangeExpressions:'* => jello'}}),
        pulseTransition({...config, ...{stateChangeExpressions:'* => pulse'}}),
        rubberBandTransition({...config, ...{stateChangeExpressions:'* => rubberBand'}}),
        shakeTransition({...config, ...{stateChangeExpressions:'* => shake'}}),
        tadaTransition({...config, ...{stateChangeExpressions:'* => tada'}}),
        wobbleTransition({...config, ...{stateChangeExpressions:'* => wobble'}}),

        // bounce int transition with different directions
        bounceInTransition({...config, ...{stateChangeExpressions:'* => bounceIn'}}),
        bounceInUpTransition({...config, ...{stateChangeExpressions:'* => bounceInUp', timings:'1000ms',translate:'500px'}}),
        bounceInRightTransition({...config, ...{stateChangeExpressions:'* => bounceInRight', timings:'1000ms',translate:'500px'}}),
        bounceInLeftTransition({...config, ...{stateChangeExpressions:'* => bounceInLeft', timings:'1000ms',translate:'500px'}}),
        bounceInDownTransition({...config, ...{stateChangeExpressions:'* => bounceInDown', timings:'1000ms',translate:'500px'}}),

        // back out transition with different directions
        backOutTransition({...config, ...{stateChangeExpressions:'* => backOutUp',direction: 'Up', timings:'500ms',translateX:'500px'}}),
        backOutTransition({...config, ...{stateChangeExpressions:'* => backOutDown',direction: 'Down', timings:'500ms',translateX:'500px'}}),
        backOutTransition({...config, ...{stateChangeExpressions:'* => backOutLeft',direction: 'Left', timings:'500ms',translateX:'500px'}}),
        backOutTransition({...config, ...{stateChangeExpressions:'* => backOutRight',direction: 'Right', timings:'500ms',translateX:'500px'}}),

       // back in transition with different directions
        backInTransition({...config, ...{stateChangeExpressions:'* => backInUp', direction: 'Up', timings:'500ms',translate:'500px'}}),
        backInTransition({...config, ...{stateChangeExpressions:'* => backInDown', direction: 'Down', timings:'500ms',translate:'500px'}}),
        backInTransition({...config, ...{stateChangeExpressions:'* => backInRight', direction: 'Right', timings:'500ms',translate:'500px'}}),
        backInTransition({...config, ...{stateChangeExpressions:'* => backInLeft', direction: 'Left', timings:'500ms',translate:'500px'}}),
      ]
    }
  );
}
