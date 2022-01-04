import {animate, keyframes, style, AnimationTriggerMetadata, animation, AnimationOptions, AnimationStyleMetadata, AnimationReferenceMetadata} from "@angular/animations";
import {AnimationConfig, AnimationDirection, AnimationDirections, TransitionConfig, DefaultAnimationConfig, overwriteDefaultAnimationOptions} from "../common";
import {buildTrigger} from "../base";

type FlipOutAnimationDirection = Extract<AnimationDirection, 'X' | 'Y'>;

const DefaultFlipOutConfig: FlipOutConfig = {...DefaultAnimationConfig, ...{direction: AnimationDirections.X, degrees:'90', triggerName: 'flipOut'}};

interface FlipOutConfig extends AnimationConfig{
  degrees: string;
  direction: FlipOutAnimationDirection;
}

const flipOutDirectionKeyframes = (direction: FlipOutAnimationDirection): AnimationStyleMetadata[] => [
  style({ transform: 'perspective(400px)', 'backface-visibility': 'visible', offset: 0}),
  style({ opacity: 1, transform: 'perspective(400px) ' + flipOutDirectionRotate(0.3, direction), 'backface-visibility': 'visible', offset: 0.3 }),
  style({ opacity: 0, transform: 'perspective(400px) ' + flipOutDirectionRotate(1, direction), 'backface-visibility': 'visible', offset: 1 })
];

function flipOutDirectionRotate(offset: 1 | 0.3 ,direction: FlipOutAnimationDirection): string{
  switch (offset) {
    case 0.3:
      return (direction === AnimationDirections.X) ? 'rotate3d(1, 0, 0, -20deg)' : 'rotate3d(0, 1, 0, -20deg)';
    case 1:
      return (direction === AnimationDirections.X) ? 'rotate3d(1, 0, 0, {{degrees}}deg)' : 'rotate3d(0, 1, 0, {{degrees}}deg)';
  }
}

const flipOutAnimation = (direction: FlipOutAnimationDirection): AnimationReferenceMetadata =>  animation(
  animate('{{timings}} {{delay}}', keyframes( flipOutDirectionKeyframes(direction) ))
);

export const flipOutTransition = (animationConfig?: Partial<FlipOutConfig>, animationOptions: AnimationOptions | null = null): TransitionConfig => {
  const configs = { ...DefaultFlipOutConfig, ...animationConfig};
  return {
    animationReferenceMetadata: flipOutAnimation(configs.direction),
    animationConfig,
    animationOptions: overwriteDefaultAnimationOptions({degrees: configs.degrees},animationOptions)
  }
}

export function flipOut(config?: Partial<FlipOutConfig>): AnimationTriggerMetadata {
  const configs: FlipOutConfig = { ...DefaultFlipOutConfig, ...config}
  return buildTrigger(
    {
      triggerName: (config && config.triggerName) || configs.triggerName + configs.direction,
      transitions: flipOutTransition(config)
    }
  )
}
