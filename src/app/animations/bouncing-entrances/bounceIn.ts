import {animate, keyframes, style, AnimationTriggerMetadata, animation, AnimationOptions, AnimationStyleMetadata, AnimationReferenceMetadata} from "@angular/animations";

import {buildTrigger, AnimationConfig, AnimationDirection, AnimationDirections, isLeftOrDownDirection, TransitionConfig, directionTranslate3d, DefaultAnimationConfig, overwriteDefaultAnimationOptions} from "../wrapper";

type BounceInAnimationDirection = Extract<AnimationDirection, 'In' | 'Down' | 'Up' |'Left' | 'Right'>;

const DefaultBounceInConfig: BounceInConfig = {...DefaultAnimationConfig, ...{direction: AnimationDirections.In, translate:'3000px', triggerName: 'bounce'}};

interface BounceInConfig extends AnimationConfig{
  translate: string;
  direction: BounceInAnimationDirection;
}

const bounceInKeyframes: AnimationStyleMetadata[] = [
  style({ opacity: 0 , transform: 'scale3d(0.3, 0.3, 0.3)',easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0}),
  style({ transform: 'scale3d(1.1, 1.1, 1.1)',easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: .2}),
  style({ transform: 'scale3d(0.9, 0.9, 0.9)',easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: .4}),
  style({ opacity: 1, transform: 'scale3d(1.03, 1.03, 1.03)',easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: .6}),
  style({ transform: 'scale3d(0.97, 0.97, 0.97)',easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: .8}),
  style({ opacity: 1, transform: 'scale3d(1, 1, 1)',easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 1} ),
];

const bounceInDirectionKeyframes = (direction: AnimationDirection): AnimationStyleMetadata[] => [
  style({ opacity: 0, transform: directionTranslate3d( bounceInDirectionTranslateValue(0,direction), direction), easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0 }),
  style({ opacity: 1, transform: directionTranslate3d( bounceInDirectionTranslateValue(0.6,direction), direction), easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.6 }),
  style({ transform: directionTranslate3d( bounceInDirectionTranslateValue(0.75,direction), direction) , easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.75 }),
  style({ transform: directionTranslate3d(bounceInDirectionTranslateValue(0.9,direction), direction), easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.9 }),
  style({ transform: 'translate3d(0, 0, 0)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 1 })
];

function bounceInDirectionTranslateValue(offset: 0 | 0.6 | 0.75 | 0.9, direction: AnimationDirection): string{
  switch (offset) {
    case 0:
      return (isLeftOrDownDirection(direction) ) ? '-{{translate}}':'{{translate}}';
    case 0.6:
      return (isLeftOrDownDirection(direction)) ? '25px':'-25px';
    case 0.75:
      return (isLeftOrDownDirection(direction)) ? '-10px':'10px';
    case 0.9:
      return (isLeftOrDownDirection(direction)) ? '5px':'-5px';
  }
}

function defaultTriggerName(configs: BounceInConfig): string {
  return configs.triggerName + ( (configs.direction === AnimationDirections.In) ? AnimationDirections.In : AnimationDirections.In + configs.direction);
}

const bounceInAnimation = (direction: AnimationDirection): AnimationReferenceMetadata =>  animation(
  animate('{{timings}} {{delay}}',
    keyframes( (direction === AnimationDirections.In) ? bounceInKeyframes : bounceInDirectionKeyframes(direction) )
  )
);

export const bounceInTransition = (animationConfig?: Partial<BounceInConfig>, animationOptions: AnimationOptions | null = null): TransitionConfig => {
  const configs = { ...DefaultBounceInConfig, ...animationConfig};
  return {
    animationReferenceMetadata: bounceInAnimation(configs.direction),
    animationConfig,
    animationOptions: overwriteDefaultAnimationOptions({translate: configs.translate},animationOptions)
  }
}

export function bounceIn(config?: Partial<BounceInConfig>): AnimationTriggerMetadata {
  const configs: BounceInConfig = { ...DefaultBounceInConfig, ...config}
  return buildTrigger(
    {
      triggerName: (config && config.triggerName) || defaultTriggerName(configs),
      transitions: bounceInTransition(config)
    }
  )
}

