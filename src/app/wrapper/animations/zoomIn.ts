import {animate, AnimationTriggerMetadata, keyframes, style, animation} from "@angular/animations";
import {AnimationConfig} from "../common";
import {buildTrigger} from "../base";

export const zoomInKeyframes = [
  style({ visibility: 'visible', transform: 'translate3d(0, 200px, 0)', easing: 'ease', offset: 0 }),
  style({ transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 1 })
];



export function zoomIn(config?: Partial<AnimationConfig>): AnimationTriggerMetadata {
  return buildTrigger(
    animation( animate('{{timings}} {{delay}}', keyframes(zoomInKeyframes) )),
    { ...{triggerName: 'zoomIn'} ,...config  }
  )
}





