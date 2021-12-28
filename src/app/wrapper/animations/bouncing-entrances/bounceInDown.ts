import {animate, keyframes, style, AnimationTriggerMetadata, animation, AnimationOptions, AnimationStyleMetadata} from "@angular/animations";
import {buildTrigger} from "../../base";
import {AnimationConfig, TransitionConfig} from "../../common";

export const bounceInDownKeyframes: AnimationStyleMetadata[] = [
  style({ transform: 'translate3d(0, -{{translate}}, 0)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0 }),
  style({ transform: 'translate3d(0, 25px, 0)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.6 }),
  style({ transform: 'translate3d(0, -10px, 0)' , easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.75 }),
  style({ transform: 'translate3d(0, 5px, 0)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.9 }),
  style({ transform: 'translate3d(0, 0, 0)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 1 })
];

export interface BounceInDownConfig extends AnimationConfig{
  translate: string;
}

export const bounceInDownAnimation =  animation( animate('{{timings}} {{delay}}', keyframes(bounceInDownKeyframes) ));

export const bounceInDownTransition = (animationConfig?: Partial<BounceInDownConfig>, animationOptions?: AnimationOptions | null): TransitionConfig => {
  return {
    animationReferenceMetadata: bounceInDownAnimation,
    animationConfig,
    animationOptions: {...animationOptions ,...{params: {...{translate: '3000px'}, ...animationOptions?.params} }}
  }
}

export function bounceInDown(config?: Partial<BounceInDownConfig>): AnimationTriggerMetadata {
  return buildTrigger(
    {
      triggerName: (config && config.triggerName) || 'bounceInDown',
      transitions: bounceInDownTransition(config)
    }
  )
}
