import {animate, keyframes, style, AnimationTriggerMetadata, animation, AUTO_STYLE, AnimationReferenceMetadata, AnimationOptions} from "@angular/animations";
import {buildTrigger} from "../base";
import {AnimationConfig, TransitionConfig} from "../common";

export const rubberBandKeyframes = [
  style({ visibility: AUTO_STYLE, transform: 'scale3d(1, 1, 1)', easing: 'ease', offset: 0 }),
  style({ transform: 'scale3d(1.25, 0.75, 1)', easing: 'ease', offset: 0.3 }),
  style({ transform: 'scale3d(0.75, 1.25, 1)', easing: 'ease', offset: 0.4 }),
  style({ transform: 'scale3d(1.15, 0.85, 1)', easing: 'ease', offset: 0.5 }),
  style({ transform: 'scale3d(0.95, 1.05, 1)', easing: 'ease', offset: 0.65 }),
  style({ transform: 'scale3d(1.05, 0.95, 1)', easing: 'ease', offset: 0.75 }),
  style({ transform: 'scale3d(1, 1, 1)', easing: 'ease', offset: 1 })
];

export const rubberBandAnimation: AnimationReferenceMetadata =  animation( animate('{{timings}} {{delay}}', keyframes(rubberBandKeyframes) ));

export const rubberBandTransition = (animationConfig?: Partial<AnimationConfig>, animationOptions?: AnimationOptions | null): TransitionConfig => {
  return {
    animationReferenceMetadata: rubberBandAnimation,
    animationConfig,
    animationOptions
  }
}

export function rubberBand(config?: Partial<AnimationConfig>): AnimationTriggerMetadata {
  return buildTrigger(
    {
      triggerName: (config && config.triggerName) || 'rubberBand',
      transitions: rubberBandTransition(config)
    }
  )
}
