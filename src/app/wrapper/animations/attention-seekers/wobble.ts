import {
  animate,
  keyframes,
  style,
  AnimationTriggerMetadata,
  animation,
  AUTO_STYLE,
  AnimationReferenceMetadata
} from "@angular/animations";
import {buildTrigger} from "../../base";
import {AnimationConfig} from "../../common";

export const wobbleKeyframes = [
  style({ visibility: AUTO_STYLE, transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 0 }),
  style({ transform: 'translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)', easing: 'ease', offset: 0.15 }),
  style({ transform: 'translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)', easing: 'ease', offset: 0.3 }),
  style({ transform: 'translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)', easing: 'ease', offset: 0.45 }),
  style({ transform: 'translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)', easing: 'ease', offset: 0.6 }),
  style({ transform: 'translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)', easing: 'ease', offset: 0.75 }),
  style({ transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 1 })
];

export const wobbleAnimation: AnimationReferenceMetadata = animation( animate('{{timings}} {{delay}}', keyframes(wobbleKeyframes) ));

export function wobble(config?: Partial<AnimationConfig>): AnimationTriggerMetadata {
  return buildTrigger(
    {
      triggerName: 'wobble',
      transitions: {
        animationReferenceMetadata: wobbleAnimation,
        animationConfig: config
      }
    }
  )
}
