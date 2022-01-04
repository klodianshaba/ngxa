import {animate, keyframes, style, AnimationTriggerMetadata, animation, AnimationOptions, AnimationStyleMetadata, AnimationReferenceMetadata} from "@angular/animations";

import {buildTrigger, AnimationConfig, AnimationDirection, AnimationDirections, TransitionConfig, DefaultAnimationConfig, overwriteDefaultAnimationOptions} from "../wrapper";

type FlipInAnimationDirection = Extract<AnimationDirection, 'X' | 'Y'>;

const DefaultFlipInConfig: FlipInConfig = {...DefaultAnimationConfig, ...{direction: AnimationDirections.X, degrees:'90', triggerName: 'flipIn'}};

interface FlipInConfig extends AnimationConfig{
  degrees: string;
  direction: FlipInAnimationDirection;
}

const flipInDirectionKeyframes = (direction: FlipInAnimationDirection): AnimationStyleMetadata[] => [
  style({transform: 'perspective(400px) ' + flipInDirectionRotate(0, direction) ,
    opacity: 0, easing: 'ease-in', 'backface-visibility': 'visible !important', offset: 0
  }),
  style({ transform: 'perspective(400px) ' + flipInDirectionRotate(0.4, direction), opacity: 0.5, easing: 'ease-in', 'backface-visibility': 'visible !important', offset: 0.4 }),
  style({ transform: 'perspective(400px) ' + flipInDirectionRotate(0.6, direction), opacity: 1, 'backface-visibility': 'visible !important', offset: 0.6 }),
  style({ transform: 'perspective(400px) ' + flipInDirectionRotate(0.8, direction),'backface-visibility': 'visible !important', offset: 0.8 }),
  style({ transform: 'perspective(400px)', 'backface-visibility': 'visible !important', offset: 1 })
];

function flipInDirectionRotate(offset: 0 | 0.4 | 0.6 | 0.8 ,direction: FlipInAnimationDirection): string{
  switch (offset) {
    case 0:
      return (direction === AnimationDirections.X) ? 'rotate3d(1, 0, 0, {{degrees}}deg)' : 'rotate3d(0, 1, 0, {{degrees}}deg)';
    case 0.4:
      return (direction === AnimationDirections.X) ? 'rotate3d(1, 0, 0, -20deg)' : 'rotate3d(0, 1, 0, -20deg)';
    case 0.6:
      return (direction === AnimationDirections.X) ? 'rotate3d(1, 0, 0, 10deg)' : 'rotate3d(0, 1, 0, 10deg)';
    case 0.8:
      return (direction === AnimationDirections.X) ? 'rotate3d(1, 0, 0, -5deg)' : 'rotate3d(0, 1, 0, -5deg)';
  }
}

const flipInAnimation = (direction: FlipInAnimationDirection): AnimationReferenceMetadata =>  animation(
  animate('{{timings}} {{delay}}',
    keyframes( flipInDirectionKeyframes(direction) )
  )
);

export const flipInTransition = (animationConfig?: Partial<FlipInConfig>, animationOptions: AnimationOptions | null = null): TransitionConfig => {
  const configs = { ...DefaultFlipInConfig, ...animationConfig};
  return {
    animationReferenceMetadata: flipInAnimation(configs.direction),
    animationConfig,
    animationOptions: overwriteDefaultAnimationOptions({degrees: configs.degrees},animationOptions)
  }
}

export function flipIn(config?: Partial<FlipInConfig>): AnimationTriggerMetadata {
  const configs: FlipInConfig = { ...DefaultFlipInConfig, ...config}
  return buildTrigger(
    {
      triggerName: (config && config.triggerName) || configs.triggerName + configs.direction,
      transitions: flipInTransition(config)
    }
  )
}
