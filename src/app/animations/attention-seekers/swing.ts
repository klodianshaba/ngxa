import {animate, keyframes, style, AnimationTriggerMetadata, animation, AUTO_STYLE, AnimationReferenceMetadata, AnimationOptions} from "@angular/animations";
import {buildTrigger} from "../wrapper/base";
import {AnimationConfig, TransitionConfig} from "../wrapper/common";

export const swingInKeyframes = [
  style({ 'transform-origin': 'top center', offset: 0 }),
  style({ visibility: AUTO_STYLE, transform: 'rotate3d(0, 0, 1, 0deg)', easing: 'ease', offset: 0 }),
  style({ transform: 'rotate3d(0, 0, 1, 15deg)', easing: 'ease', offset: 0.2 }),
  style({ transform: 'rotate3d(0, 0, 1, -10deg)', easing: 'ease', offset: 0.4 }),
  style({ transform: 'rotate3d(0, 0, 1, 5deg)', easing: 'ease', offset: 0.6 }),
  style({ transform: 'rotate3d(0, 0, 1, -5deg)', easing: 'ease', offset: 0.8 }),
  style({ transform: 'rotate3d(0, 0, 1, 0deg)', easing: 'ease', offset: 1 })
];

export const swingAnimation: AnimationReferenceMetadata = animation( animate('{{timings}} {{delay}}', keyframes(swingInKeyframes) ));

export const swingTransition = (animationConfig?: Partial<AnimationConfig>, animationOptions?: AnimationOptions | null): TransitionConfig => {
  return {
    animationReferenceMetadata: swingAnimation,
    animationConfig,
    animationOptions
  }
}

export function swing(config?: Partial<AnimationConfig>): AnimationTriggerMetadata {
  return buildTrigger({
      triggerName: (config && config.triggerName) || 'swing',
      transitions: swingTransition(config)
    }
  )
}
