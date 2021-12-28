import {animate, keyframes, style, AnimationTriggerMetadata, animation, AnimationOptions, AnimationStyleMetadata, group} from "@angular/animations";
import {buildTrigger} from "../../base";
import {AnimationConfig, TransitionConfig} from "../../common";

export const bounceInRightKeyframes: AnimationStyleMetadata[] = [
  style({ opacity: 0, transform: 'translate3d({{translate}}, 0, 0)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0 }),
  style({ opacity: 1, transform: 'translate3d(-25px, 0, 0)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.6 }),
  style({ transform: 'translate3d(10px, 0, 0)' , easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.75 }),
  style({ transform: 'translate3d(-5px, 0, 0)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.9 }),
  style({ transform: 'translate3d(0, 0, 0)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 1 })
];

export interface BounceInRightConfig extends AnimationConfig{
  translate: string;
}

export const bounceInRightAnimation = animation(group([animate('{{timings}} {{delay}}', keyframes(bounceInRightKeyframes))]));

export const bounceInRightTransition = (animationConfig?: Partial<BounceInRightConfig>, animationOptions?: AnimationOptions | null): TransitionConfig => {
  return {
    animationReferenceMetadata: bounceInRightAnimation,
    animationConfig,
    animationOptions: {...animationOptions ,...{params: {...{translate: '3000px'}, ...animationOptions?.params} }}
  }
}

export function bounceInRight(config?: Partial<BounceInRightConfig>): AnimationTriggerMetadata {
  return buildTrigger(
    {
      triggerName: (config && config.triggerName) || 'bounceInRight',
      transitions: bounceInRightTransition(config)
    }
  )
}
