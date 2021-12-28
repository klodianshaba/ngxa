import {animate, keyframes, style, AnimationTriggerMetadata, animation, AnimationOptions, AnimationStyleMetadata} from "@angular/animations";
import {buildTrigger} from "../../base";
import {AnimationConfig, TransitionConfig} from "../../common";

export const bounceInUpKeyframes: AnimationStyleMetadata[] = [
  style({ transform: 'translate3d(0, {{translate}}, 0)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0 }),
  style({ transform: 'translate3d(0, -20px, 0)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.6 }),
  style({ transform: 'translate3d(0, 10px, 0)' , easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.75 }),
  style({ transform: 'translate3d(0, -5px, 0)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.9 }),
  style({ transform: 'translate3d(0, 0, 0)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 1 })
];

export interface BounceInUpConfig extends AnimationConfig{
  translate: string;
}

export const bounceInUpAnimation =  animation( animate('{{timings}} {{delay}}', keyframes(bounceInUpKeyframes) ));

export const bounceInUpTransition = (animationConfig?: Partial<BounceInUpConfig>, animationOptions?: AnimationOptions | null): TransitionConfig => {
  return {
    animationReferenceMetadata: bounceInUpAnimation,
    animationConfig,
    animationOptions: {...animationOptions ,...{params: {...{translate: '3000px'}, ...animationOptions?.params} }}
  }
}

export function bounceInUp(config?: Partial<BounceInUpConfig>): AnimationTriggerMetadata {
  return buildTrigger(
    {
      triggerName: (config && config.triggerName) || 'bounceInUp',
      transitions: bounceInUpTransition(config)
    }
  )
}
