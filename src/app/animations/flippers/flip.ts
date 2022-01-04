import {animate, keyframes, style, AnimationTriggerMetadata, animation, AnimationOptions, AnimationStyleMetadata, AnimationReferenceMetadata} from "@angular/animations";
import {buildTrigger, DefaultAnimationConfig, overwriteDefaultAnimationOptions} from "../wrapper";
import {AnimationConfig, TransitionConfig, AnimationDirections, AnimationDirection} from "../wrapper";

const flipKeyframes: AnimationStyleMetadata[] = [
  style({
    transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)',
    easing: 'ease-out', 'backface-visibility': 'visible', offset: 0
  }),
  style({
    transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)',
    easing: 'ease-out', 'backface-visibility': 'visible', offset: 0.4
  }),
  style({
    transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)',
    easing: 'ease-out', 'backface-visibility': 'visible', offset: 0.5
  }),
  style({
    transform: 'perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)',
    easing: 'ease-in', 'backface-visibility': 'visible', offset: 0.8
  }),
  style({
    transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)',
    easing: 'ease-in', 'backface-visibility': 'visible', offset: 1
  })
];

const DefaultFlipConfig: FlipConfig = {...DefaultAnimationConfig, ...{direction: AnimationDirections.Left, translate:'700px', triggerName: 'flip'}};

interface FlipConfig extends AnimationConfig{
  translate: string;
}

const flipAnimation: AnimationReferenceMetadata = animation( animate('{{timings}} {{delay}}', keyframes(flipKeyframes) ));

export const flipTransition = (animationConfig?: Partial<FlipConfig>, animationOptions: AnimationOptions | null = null): TransitionConfig => {
  const configs: FlipConfig = {...DefaultFlipConfig, ...animationConfig};
  return {
    animationReferenceMetadata: flipAnimation,
    animationConfig,
    animationOptions: overwriteDefaultAnimationOptions({translate: configs.translate}, animationOptions)
  }
}

export function flip(config?: Partial<FlipConfig>): AnimationTriggerMetadata {
  const configs: FlipConfig = {...DefaultFlipConfig, ...config};
  return buildTrigger(
    {
      triggerName: (config && config.triggerName) || configs.triggerName,
      transitions: flipTransition(config)
    }
  )
}
