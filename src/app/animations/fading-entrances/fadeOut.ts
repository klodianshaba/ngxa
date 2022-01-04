import {animate, keyframes, style, AnimationTriggerMetadata, animation, AnimationOptions, AnimationStyleMetadata, AnimationReferenceMetadata} from "@angular/animations";

import {buildTrigger, AnimationConfig, AnimationDirection, AnimationDirections, TransitionConfig, DefaultAnimationConfig, overwriteDefaultAnimationOptions} from "../wrapper";

type FadeOutAnimationDirection = Extract<AnimationDirection, 'Out' | 'Down' | 'Up' |'Left' | 'Right' | 'TopLeft' | 'TopRight' | 'BottomLeft' | 'BottomRight'>;

const DefaultFadeOutConfig: FadeOutConfig = {...DefaultAnimationConfig, ...{direction: AnimationDirections.Out, translate:'100%', triggerName: 'fade'}};

interface FadeOutConfig extends AnimationConfig{
  translate: string;
  direction: FadeOutAnimationDirection;
}

const fadeOutDirectionKeyframes = (direction: FadeOutAnimationDirection): AnimationStyleMetadata[] => [
  style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0 }),
  style({ opacity: 0, transform: fadeOutDirectionTranslate(direction), offset: 1 }),
];

function fadeOutDirectionTranslate(direction: FadeOutAnimationDirection): string{
  switch (direction) {
    case "Left":
      return 'translate3d(-{{translate}},0,0)';
    case "Right":
      return 'translate3d({{translate}},0,0)';
    case "Down":
      return 'translate3d(0,{{translate}},0)';
    case "Up":
      return 'translate3d(0,-{{translate}},0)';
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

function defaultTriggerName(configs: FadeOutConfig): string {
  return configs.triggerName + ( (configs.direction === AnimationDirections.Out) ? AnimationDirections.Out : AnimationDirections.Out + configs.direction);
}

const fadeOutAnimation = (direction: FadeOutAnimationDirection): AnimationReferenceMetadata =>  animation(
  animate('{{timings}} {{delay}}',
    keyframes( fadeOutDirectionKeyframes(direction) )
  )
);

export const fadeOutTransition = (animationConfig?: Partial<FadeOutConfig>, animationOptions: AnimationOptions | null = null): TransitionConfig => {
  const configs = { ...DefaultFadeOutConfig, ...animationConfig};
  return {
    animationReferenceMetadata: fadeOutAnimation(configs.direction),
    animationConfig,
    animationOptions: overwriteDefaultAnimationOptions({translate: configs.translate},animationOptions)
  }
}

export function fadeOut(config?: Partial<FadeOutConfig>): AnimationTriggerMetadata {
  const configs: FadeOutConfig = { ...DefaultFadeOutConfig, ...config}
  return buildTrigger(
    {
      triggerName: (config && config.triggerName) || defaultTriggerName(configs),
      transitions: fadeOutTransition(config)
    }
  )
}

