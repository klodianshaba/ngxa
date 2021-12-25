import {animate, AnimationTriggerMetadata, keyframes, style, animation} from "@angular/animations";
import {AnimationConfig} from "../common";
import {buildTrigger} from "../base";

export const zoomInKeyframes = [
  style({opacity:0,transform: 'scale3d(0.3, 0.3, 0.3)', offset: 0}),
  style({opacity:1, transform: 'none', offset: 1})
];

export function zoomIn(config?: Partial<AnimationConfig>): AnimationTriggerMetadata {
  return buildTrigger(
    animation( animate('{{timings}} {{delay}}', keyframes(zoomInKeyframes) )),
    { ...{triggerName: 'zoomIn'} ,...config  }
  )
}





