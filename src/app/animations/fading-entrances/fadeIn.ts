import {animate, keyframes, style, AnimationTriggerMetadata, animation, AnimationOptions, AnimationStyleMetadata, AnimationReferenceMetadata} from "@angular/animations";

import {buildTrigger, AnimationConfig, AnimationDirection, AnimationDirections, isLeftOrDownDirection, TransitionConfig, directionTranslate3d, DefaultAnimationConfig, overwriteDefaultAnimationOptions} from "../wrapper";

type FadeInAnimationDirection = Extract<AnimationDirection, 'In' | 'Down' | 'Up' |'Left' | 'Right' | 'TopLeft' | 'TopRight' | 'BottomLeft' | 'BottomRight'>;

const DefaultFadeInConfig: FadeInConfig = {...DefaultAnimationConfig, ...{direction: AnimationDirections.In, translate:'100%', triggerName: 'fade'}};

interface FadeInConfig extends AnimationConfig{
  translate: string;
  direction: FadeInAnimationDirection;
}

const fadeInDirectionKeyframes = (direction: FadeInAnimationDirection): AnimationStyleMetadata[] => [
  style({ opacity: 0, transform: fadeInDirectionTranslate(direction), offset: 0 }),
  style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 })
];

function fadeInDirectionTranslate(direction: FadeInAnimationDirection): string{
  switch (direction) {
    case "Left":
      return 'translate3d(-{{translate}},0,0)';
    case "Right":
      return 'translate3d({{translate}},0,0)';
    case "Down":
      return 'translate3d(0,-{{translate}},0)';
    case "Up":
      return 'translate3d(0,{{translate}},0)';
    case "TopLeft":
      return 'translate3d(-{{translate}},-{{translate}},0)';
    case "TopRight":
      return 'translate3d({{translate}},-{{translate}},0)';
    case "BottomLeft":
      return 'translate3d(-{{translate}},{{translate}},0)';
    case "BottomRight":
      return 'translate3d({{translate}},{{translate}},0)';
    default:
      return '0';
  }
}

function defaultTriggerName(configs: FadeInConfig): string {
  return configs.triggerName + ( (configs.direction === AnimationDirections.In) ? AnimationDirections.In : AnimationDirections.In + configs.direction);
}

const fadeInAnimation = (direction: FadeInAnimationDirection): AnimationReferenceMetadata =>  animation(
  animate('{{timings}} {{delay}}',
    keyframes( fadeInDirectionKeyframes(direction) )
  )
);

export const fadeInTransition = (animationConfig?: Partial<FadeInConfig>, animationOptions: AnimationOptions | null = null): TransitionConfig => {
  const configs = { ...DefaultFadeInConfig, ...animationConfig};
  return {
    animationReferenceMetadata: fadeInAnimation(configs.direction),
    animationConfig,
    animationOptions: overwriteDefaultAnimationOptions({translate: configs.translate},animationOptions)
  }
}

export function fadeIn(config?: Partial<FadeInConfig>): AnimationTriggerMetadata {
  const configs: FadeInConfig = { ...DefaultFadeInConfig, ...config}
  return buildTrigger(
    {
      triggerName: (config && config.triggerName) || defaultTriggerName(configs),
      transitions: fadeInTransition(config)
    }
  )
}

