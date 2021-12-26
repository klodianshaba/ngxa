import {
  animate,
  keyframes,
  style,
  AnimationTriggerMetadata,
  animation,
  AnimationOptions,
  AnimationKeyframesSequenceMetadata, AnimationStyleMetadata
} from "@angular/animations";
import {buildTrigger} from "../base";
import {AnimationConfig, TransitionConfig} from "../common";

export const bounceInKeyframes: AnimationStyleMetadata[] = [
  style({ opacity: 0 , transform: 'scale3d(0.3, 0.3, 0.3)',easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0}),
  style({ transform: 'scale3d(1.1, 1.1, 1.1)',easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: .2}),
  style({ transform: 'scale3d(0.9, 0.9, 0.9)',easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: .4}),
  style({ opacity: 1, transform: 'scale3d(1.03, 1.03, 1.03)',easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: .6}),
  style({ transform: 'scale3d(0.97, 0.97, 0.97)',easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: .8}),
  style({ opacity: 1, transform: 'scale3d(1, 1, 1)',easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 1} ),
];

export const bounceInAnimation =  animation( animate('{{timings}} {{delay}}', keyframes(bounceInKeyframes) ));

export const bounceInTransition = (animationConfig?: Partial<AnimationConfig>, animationOptions?: AnimationOptions | null): TransitionConfig => {
  return {
    animationReferenceMetadata: bounceInAnimation,
    animationConfig,
    animationOptions
  }
}

export function bounceIn(config?: Partial<AnimationConfig>): AnimationTriggerMetadata {
  return buildTrigger(
    {
      triggerName: (config && config.triggerName) || 'bounceIn',
      transitions: bounceInTransition(config)
    }
  )
}
