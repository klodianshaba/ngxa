import {animate, keyframes, style, AnimationTriggerMetadata, animation, AUTO_STYLE, AnimationReferenceMetadata, AnimationOptions} from "@angular/animations";
import {buildTrigger} from "../wrapper/base";
import {AnimationConfig, TransitionConfig} from "../wrapper/common";

export const flashKeyframes = [
  style({ visibility: AUTO_STYLE, opacity: 1, offset: 0 }),
  style({ opacity: 0, easing: 'ease', offset: 0.25 }),
  style({ opacity: 1, easing: 'ease', offset: 0.5 }),
  style({ opacity: 0, easing: 'ease', offset: 0.75 }),
  style({ opacity: 1, easing: 'ease', offset: 1 })
];
export const flashAnimation: AnimationReferenceMetadata =  animation( animate('{{timings}} {{delay}}', keyframes(flashKeyframes) ));

export const flashTransition = (animationConfig?: Partial<AnimationConfig>, animationOptions?: AnimationOptions | null): TransitionConfig => {
  return {
    animationReferenceMetadata: flashAnimation,
    animationConfig,
    animationOptions
  }
}

export function flash(config?: Partial<AnimationConfig>): AnimationTriggerMetadata {
  return buildTrigger(
    {
      triggerName: (config && config.triggerName) || 'flash',
      transitions: flashTransition(config)
    }
  )
}
