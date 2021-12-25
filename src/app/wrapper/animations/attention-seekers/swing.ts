import {animate, keyframes, style, AnimationTriggerMetadata, animation, AUTO_STYLE} from "@angular/animations";
import {buildTrigger} from "../../base";
import {AnimationConfig} from "../../common";

export const swingInKeyframes = [
  style({ 'transform-origin': 'top center', offset: 0 }),
  style({ opacity:0, visibility: AUTO_STYLE, transform: 'rotate3d(0, 0, 1, 0deg)', easing: 'ease', offset: 0 }),
  style({ opacity:1,transform: 'rotate3d(0, 0, 1, 15deg)', easing: 'ease', offset: 0.2 }),
  style({ transform: 'rotate3d(0, 0, 1, -10deg)', easing: 'ease', offset: 0.4 }),
  style({ transform: 'rotate3d(0, 0, 1, 5deg)', easing: 'ease', offset: 0.6 }),
  style({ transform: 'rotate3d(0, 0, 1, -5deg)', easing: 'ease', offset: 0.8 }),
  style({ transform: 'rotate3d(0, 0, 1, 0deg)', easing: 'ease', offset: 1 })
];

export function swing(config?: Partial<AnimationConfig>): AnimationTriggerMetadata {
  return buildTrigger(
    animation( animate('{{timings}} {{delay}}', keyframes(swingInKeyframes) )),
    {...{triggerName: 'swing'},...config}
  )
}
