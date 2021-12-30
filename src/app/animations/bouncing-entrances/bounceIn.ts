import {animate, keyframes, style, AnimationTriggerMetadata, animation, AnimationOptions, AnimationStyleMetadata, AnimationReferenceMetadata} from "@angular/animations";

import {
  buildTrigger,
  AnimationConfig,
  AnimationDirection,
  AnimationDirections,
  isLeftOrDownDirection,
  TransitionConfig,
  directionTranslate3d, isYDirection
} from "../wrapper";

export const bounceInKeyframes: AnimationStyleMetadata[] = [
  style({ opacity: 0 , transform: 'scale3d(0.3, 0.3, 0.3)',easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0}),
  style({ transform: 'scale3d(1.1, 1.1, 1.1)',easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: .2}),
  style({ transform: 'scale3d(0.9, 0.9, 0.9)',easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: .4}),
  style({ opacity: 1, transform: 'scale3d(1.03, 1.03, 1.03)',easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: .6}),
  style({ transform: 'scale3d(0.97, 0.97, 0.97)',easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: .8}),
  style({ opacity: 1, transform: 'scale3d(1, 1, 1)',easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 1} ),
];

export const bounceInDirectionKeyframes = (direction: AnimationDirection): AnimationStyleMetadata[] => [
  style({ opacity: 0, transform: directionTranslate3d( bounceInDirectionTranslateValue(0,direction), direction), easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0 }),
  style({ opacity: 1, transform: directionTranslate3d( bounceInDirectionTranslateValue(0.6,direction), direction), easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.6 }),
  style({ transform: directionTranslate3d( bounceInDirectionTranslateValue(0.75,direction), direction) , easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.75 }),
  style({ transform: directionTranslate3d(bounceInDirectionTranslateValue(0.9,direction), direction), easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.9 }),
  style({ transform: 'translate3d(0, 0, 0)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 1 })
];

export function bounceInDirectionTranslateValue(offset: 0 | 0.6 | 0.75 | 0.9, direction: AnimationDirection): string{
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

export interface BounceInConfig extends AnimationConfig{
  translate: string;
  direction: AnimationDirection;
}

export const bounceInAnimation = (direction: AnimationDirection): AnimationReferenceMetadata =>  animation(
  animate('{{timings}} {{delay}}',
    keyframes( (direction === AnimationDirections.In) ? bounceInKeyframes : bounceInDirectionKeyframes(direction) )
  )
);

export const bounceInTransition = (animationConfig?: Partial<BounceInConfig>, animationOptions?: AnimationOptions | null): TransitionConfig => {
  animationConfig = { ...{direction: AnimationDirections.In}, ...animationConfig};
  return {
    animationReferenceMetadata: bounceInAnimation((animationConfig.direction) || AnimationDirections.In ),
    animationConfig,
    animationOptions: {...animationOptions ,...{params: {...{translate: '3000px'}, ...animationOptions?.params} }}
  }
}

export function bounceIn(config?: Partial<BounceInConfig>): AnimationTriggerMetadata {
  config = { ...{direction: AnimationDirections.In}, ...config}
  return buildTrigger(
    {
      triggerName: (config && config.triggerName) || 'bounce' + ( (config.direction === AnimationDirections.In) ? AnimationDirections.In : AnimationDirections.In + config.direction),
      transitions: bounceInTransition(config)
    }
  )
}

