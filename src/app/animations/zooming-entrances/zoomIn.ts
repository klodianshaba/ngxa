import {animate, AnimationTriggerMetadata, keyframes, style, animation, AnimationOptions} from "@angular/animations";
import {AnimationConfig, TransitionConfig} from "../wrapper/common";
import {buildTrigger} from "../wrapper/base";

export const zoomInKeyframes = [
  style({ visibility: 'visible', transform: 'scale3d(0.3, 0.3, 0.3)', easing: 'ease', offset: 0}),
  style({ transform: 'scale3d(1, 1, 1)', easing: 'ease', offset: 1})
];

export const zoomInAnimation =  animation( animate('{{timings}} {{delay}}', keyframes(zoomInKeyframes) ));

export const zoomInTransition = (animationConfig?: Partial<AnimationConfig>, animationOptions?: AnimationOptions | null): TransitionConfig => {
  return {
    animationReferenceMetadata: zoomInAnimation,
    animationConfig,
    animationOptions
  }
}

export function zoomIn(config?: Partial<AnimationConfig>): AnimationTriggerMetadata {
  return buildTrigger(
    {
      triggerName: (config && config.triggerName) || 'zoomIn',
      transitions: zoomInTransition(config)
    }
  )
}





