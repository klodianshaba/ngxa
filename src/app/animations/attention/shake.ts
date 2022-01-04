import {animate, keyframes, style, AnimationTriggerMetadata, animation, AUTO_STYLE, AnimationReferenceMetadata, AnimationOptions} from "@angular/animations";
import {buildTrigger} from "../wrapper/base";
import {AnimationConfig, TransitionConfig} from "../wrapper/common";

export const shakeKeyframes = [
  style({ visibility: AUTO_STYLE, transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 0 }),
  style({ transform: 'translate3d(-{{translate}}, 0, 0)', easing: 'ease', offset: 0.1 }),
  style({ transform: 'translate3d({{translate}}, 0, 0)', easing: 'ease', offset: 0.2 }),
  style({ transform: 'translate3d(-{{translate}}, 0, 0)', easing: 'ease', offset: 0.3 }),
  style({ transform: 'translate3d({{translate}}, 0, 0)', easing: 'ease', offset: 0.4 }),
  style({ transform: 'translate3d(-{{translate}}, 0, 0)', easing: 'ease', offset: 0.5 }),
  style({ transform: 'translate3d({{translate}}, 0, 0)', easing: 'ease', offset: 0.6 }),
  style({ transform: 'translate3d(-{{translate}}, 0, 0)', easing: 'ease', offset: 0.7 }),
  style({ transform: 'translate3d({{translate}}, 0, 0)', easing: 'ease', offset: 0.8 }),
  style({ transform: 'translate3d(-{{translate}}, 0, 0)', easing: 'ease', offset: 0.9 }),
  style({ transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 1 })
];

export interface shakeAnimationConfig extends AnimationConfig{
  translate: string;
}

export const shakeAnimation: AnimationReferenceMetadata = animation( animate('{{timings}} {{delay}}', keyframes(shakeKeyframes) ));

export const shakeTransition = (animationConfig?: Partial<shakeAnimationConfig>, animationOptions?: AnimationOptions | null): TransitionConfig => {
  return {
    animationReferenceMetadata: shakeAnimation,
    animationConfig,
    animationOptions:{...animationOptions ,...{params: {...{translate: '10px'}, ...animationOptions?.params} }}
  }
}

export function shake(config?: Partial<shakeAnimationConfig>): AnimationTriggerMetadata {
  return buildTrigger(
    {
      triggerName: (config && config.triggerName) || 'shake',
      transitions: shakeTransition(config)
    }
  )
}

