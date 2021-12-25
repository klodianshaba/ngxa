import {animate, keyframes, style, AnimationTriggerMetadata, animation, AUTO_STYLE} from "@angular/animations";
import {buildTrigger} from "../../base";
import {AnimationConfig} from "../../common";

export const flashKeyframes = [
  style({ visibility: AUTO_STYLE, opacity: 0, easing: 'ease', offset: 0 }),
  style({ opacity: 1, easing: 'ease', offset: 0.25 }),
  style({ opacity: 0, easing: 'ease', offset: 0.5 }),
  style({ opacity: 1, easing: 'ease', offset: 0.75 }),
  style({ opacity: 0, easing: 'ease', offset: 1 })
];

export function flash(config?: Partial<AnimationConfig>): AnimationTriggerMetadata {
  return buildTrigger(
    animation( animate('{{timings}} {{delay}}', keyframes(flashKeyframes) )),
    {...{triggerName: 'flash'},...config}
  )
}
