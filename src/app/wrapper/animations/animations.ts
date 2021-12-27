import {AnimationTriggerMetadata} from "@angular/animations";
import {buildTrigger} from "../base";
import {AnimationConfig} from "../common";
import {bounceInTransition} from "./bounceIn";
import {zoomInAnimation, zoomInTransition} from "./zoomIn";
import {bounceTransition, flashTransition, headShakeTransition, heartBeatTransition, jelloTransition, swingTransition} from "./attention-seekers";
import {pulseTransition} from "./attention-seekers/pulse";
import {rubberBandTransition} from "./attention-seekers/rubber-band";
import {shakeTransition} from "./attention-seekers/shake";

import {AnimationOptions} from "@angular/animations";

export interface AnimationModel{
  triggerName:string,
  value: string | number | boolean,
  params: AnimationOptions | null,
  canAnimate: boolean,
  active: boolean
}

export const Animations: AnimationModel[] = [
  {triggerName:'zoomIn', value: 'zoomIn' ,params:{}, canAnimate: false, active: false},
  {triggerName:'bounceIn', value: 'bounceIn' ,params:{}, canAnimate: false,active: false},
  {triggerName:'swing', value: 'swing' ,params:{}, canAnimate: false,active: false},
  {triggerName:'bounce', value: 'bounce' ,params:{}, canAnimate: false,active: false},
  {triggerName:'flash', value: 'flash' ,params:{}, canAnimate: false,active: false},
  {triggerName:'headShake', value: 'headShake' ,params:{}, canAnimate: false,active: false},
  {triggerName:'heartBeat', value: 'heartBeat' ,params:{}, canAnimate: false,active: false},
  {triggerName:'jello', value: 'jello' ,params:{}, canAnimate: false,active: false},
  {triggerName:'pulse', value: 'pulse' ,params:{}, canAnimate: false,active: false},
  {triggerName:'rubberBand', value: 'rubberBand' ,params:{}, canAnimate: false,active: false},
  {triggerName:'shake', value: 'shake' ,params:{}, canAnimate: false,active: false},
];

export function animations(config?: Partial<AnimationConfig>): AnimationTriggerMetadata{
  return buildTrigger(
    {
      triggerName: (config && config.triggerName) || 'animations',
      transitions: [
        zoomInTransition({...config, ...{stateChangeExpressions:'* => zoomIn'}}),
        bounceInTransition({...config, ...{stateChangeExpressions:'* => bounceIn'}}),
        swingTransition({...config, ...{stateChangeExpressions:'* => swing'}}),
        bounceTransition({...config, ...{stateChangeExpressions:'* => bounce'}}),
        flashTransition({...config, ...{stateChangeExpressions:'* => flash'}}),
        headShakeTransition({...config, ...{stateChangeExpressions:'* => headShake'}}),
        heartBeatTransition({...config, ...{stateChangeExpressions:'* => heartBeat'}}),
        jelloTransition({...config, ...{stateChangeExpressions:'* => jello'}}),
        pulseTransition({...config, ...{stateChangeExpressions:'* => pulse'}}),
        rubberBandTransition({...config, ...{stateChangeExpressions:'* => rubberBand'}}),
        shakeTransition({...config, ...{stateChangeExpressions:'* => shake'}})
      ]
    }
  );
}
