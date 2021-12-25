import {animate, keyframes, style, AnimationTriggerMetadata, animation, AUTO_STYLE} from "@angular/animations";
import {buildTrigger} from "../../base";
import {AnimationConfig} from "../../common";

export const headShakeKeyframes = [
  style({ opacity: 0, visibility: AUTO_STYLE, transform: 'translateX(0)', easing: 'ease-in-out', offset: 0 }),
  style({ opacity: 1, transform: 'translateX(-6px) rotateY(-9deg)', easing: 'ease-in-out', offset: 0.065 }),
  style({ transform: 'translateX(5px) rotateY(7deg)', easing: 'ease-in-out', offset: 0.185 }),
  style({ transform: 'translateX(-3px) rotateY(-5deg)', easing: 'ease-in-out', offset: 0.315 }),
  style({ transform: 'translateX(2px) rotateY(3deg)', easing: 'ease-in-out', offset: 0.435 }),
  style({ transform: 'translateX(0)', easing: 'ease-in-out', offset: 0.5 })
];

export function headShake(config?: Partial<AnimationConfig>): AnimationTriggerMetadata {
  return buildTrigger(
    animation( animate('{{timings}} {{delay}}', keyframes(headShakeKeyframes) )),
    {...{triggerName: 'headShake'},...config}
  )
}
