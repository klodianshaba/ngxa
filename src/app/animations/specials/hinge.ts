import {animate, keyframes, style, AnimationTriggerMetadata, animation, AnimationOptions, AnimationStyleMetadata, AnimationReferenceMetadata} from "@angular/animations";
import {buildTrigger, DefaultAnimationConfig, overwriteDefaultAnimationOptions} from "../wrapper";
import {AnimationConfig, TransitionConfig, AnimationDirections, AnimationDirection} from "../wrapper";

const hingeKeyframes: AnimationStyleMetadata[] = [
  style({ opacity: 1, 'transform-origin': 'top left', transform: 'translate3d(0, 0, 0)', easing: 'ease-in-out', offset: 0 }),
  style({ opacity: 1, 'transform-origin': 'top left', transform: 'rotate3d(0, 0, 1, 80deg)', easing: 'ease-in-out', offset: 0.2 }),
  style({ opacity: 1, 'transform-origin': 'top left', transform: 'rotate3d(0, 0, 1, 60deg)', easing: 'ease-in-out', offset: 0.4 }),
  style({ opacity: 1, 'transform-origin': 'top left', transform: 'rotate3d(0, 0, 1, 80deg)', easing: 'ease-in-out', offset: 0.6 }),
  style({ opacity: 1, 'transform-origin': 'top left', transform: 'rotate3d(0, 0, 1, 60deg)', easing: 'ease-in-out', offset: 0.8 }),
  style({ opacity: 0, 'transform-origin': 'top left', transform: 'translate3d(0, 700px, 0)', easing: 'ease-in-out', offset: 1 })
];

const DefaultHingeConfig: HingeConfig = {...DefaultAnimationConfig, ...{direction: AnimationDirections.Left, translate:'1200px', triggerName: 'hinge'}};

interface HingeConfig extends AnimationConfig{
  translate: string;
}

const hingeAnimation: AnimationReferenceMetadata = animation( animate('{{timings}} {{delay}}', keyframes(hingeKeyframes) ));

export const hingeTransition = (animationConfig?: Partial<HingeConfig>, animationOptions: AnimationOptions | null = null): TransitionConfig => {
  const configs: HingeConfig = {...DefaultHingeConfig, ...animationConfig};
  return {
    animationReferenceMetadata: hingeAnimation,
    animationConfig,
    animationOptions: overwriteDefaultAnimationOptions({translate: configs.translate}, animationOptions)
  }
}

export function hinge(config?: Partial<HingeConfig>): AnimationTriggerMetadata {
  const configs: HingeConfig = {...DefaultHingeConfig, ...config};
  return buildTrigger(
    {
      triggerName: (config && config.triggerName) || configs.triggerName,
      transitions: hingeTransition(config)
    }
  )
}
