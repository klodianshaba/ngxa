import {animate, keyframes, style, AnimationTriggerMetadata, animation, AUTO_STYLE, AnimationReferenceMetadata, AnimationTransitionMetadata, AnimationOptions} from "@angular/animations";
import {buildTrigger} from "../wrapper/base";
import {AnimationConfig, TransitionConfig} from "../wrapper/common";

export const pulseKeyframes = [
  style({ visibility: AUTO_STYLE, transform: 'scale3d(1, 1, 1)', easing: 'ease', offset: 0 }),
  style({ transform: 'scale3d({{scale}}, {{scale}}, {{scale}})', easing: 'ease', offset: 0.5 }),
  style({ transform: 'scale3d(1, 1, 1)', easing: 'ease', offset: 1 })
];

interface PulseAnimationConfig extends AnimationConfig{
  scale: number;
}

export const pulseAnimation: AnimationReferenceMetadata = animation( animate('{{timings}} {{delay}}', keyframes(pulseKeyframes) ));

export const pulseTransition = (animationConfig?: Partial<PulseAnimationConfig>, animationOptions?: AnimationOptions | null): TransitionConfig => {
  return {
    animationReferenceMetadata: pulseAnimation,
    animationConfig,
    animationOptions: {...animationOptions ,...{params: {...{scale: 1.05}, ...animationOptions?.params} }}
  }
}

export function pulse(config?: Partial<PulseAnimationConfig>): AnimationTriggerMetadata {
  return buildTrigger(
    {
      triggerName: (config && config.triggerName) || 'pulse',
      transitions: pulseTransition(config)
    }
  )
}