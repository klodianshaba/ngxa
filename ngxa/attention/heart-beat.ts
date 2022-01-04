import {animate, keyframes, style, AnimationTriggerMetadata, animation, AUTO_STYLE, AnimationReferenceMetadata, AnimationTransitionMetadata, AnimationOptions} from "@angular/animations";
import {buildTrigger} from "../base";
import {AnimationConfig, TransitionConfig} from "../common";

export const heartBeatKeyframes = [
  style({ visibility: AUTO_STYLE, transform: 'scale(1)', easing: 'ease-in-out', offset: 0 }),
  style({ transform: 'scale({{scale}})', easing: 'ease-in-out', offset: 0.14 }),
  style({ transform: 'scale(1)', easing: 'ease-in-out', offset: 0.28 }),
  style({ transform: 'scale({{scale}})', easing: 'ease-in-out', offset: 0.42 }),
  style({ transform: 'scale(1)', easing: 'ease-in-out', offset: 0.7 })
];

interface HeartBeatAnimationConfig extends AnimationConfig{
  scale: number;
}

export const heartBeatAnimation: AnimationReferenceMetadata = animation( animate('{{timings}} {{delay}}', keyframes(heartBeatKeyframes) ));

export const heartBeatTransition = (animationConfig?: Partial<HeartBeatAnimationConfig>, animationOptions?: AnimationOptions | null): TransitionConfig => {
  return {
    animationReferenceMetadata: heartBeatAnimation,
    animationConfig,
    animationOptions: {...animationOptions ,...{params: {...{scale: 1.3}, ...animationOptions?.params} }}
  }
}

export function heartBeat(config?: Partial<HeartBeatAnimationConfig>): AnimationTriggerMetadata {
  return buildTrigger(
    {
      triggerName: (config && config.triggerName) || 'heartBeat',
      transitions: heartBeatTransition(config)
    }
  )
}
