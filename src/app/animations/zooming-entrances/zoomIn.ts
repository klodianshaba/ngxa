
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

export const zoomInKeyframes: AnimationStyleMetadata[] = [
  style({ visibility: 'visible', transform: 'scale3d(0.3, 0.3, 0.3)', easing: 'ease', offset: 0}),
  style({ transform: 'scale3d(1, 1, 1)', easing: 'ease', offset: 1})
];

export const zoomInDirectionKeyframes = (direction: AnimationDirection): AnimationStyleMetadata[] => [
  style({ opacity: 0, transform: 'scale3d(0.1, 0.1, 0.1) ' + directionTranslate3d( zoomInDirectionTranslateValue(0,direction) , direction), easing: 'ease', offset: 0 }),
  style({ opacity: 1, transform: 'scale3d(0.475, 0.475, 0.475) ' + directionTranslate3d( zoomInDirectionTranslateValue(0.6,direction), direction), easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)', offset: 0.6 }),
  style({ opacity: 1, transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)', offset: 1 })
];

export function zoomInDirectionTranslateValue(offset: 0 | 0.6, direction: AnimationDirection): string{
  switch (offset) {
    case 0:
      return (isLeftOrDownDirection(direction) ) ? '-{{translate}}':'{{translate}}';
    case 0.6:
     return ((isLeftOrDownDirection(direction)) ? '' : '-') + ((isYDirection(direction)) ? '60px' : '10px')
  }
}

export interface ZoomInConfig extends AnimationConfig{
  translate: string;
  direction: AnimationDirection;
}


export const zoomInAnimation = (direction: AnimationDirection): AnimationReferenceMetadata =>  animation(
  animate('{{timings}} {{delay}}',
    keyframes( (direction === AnimationDirections.In) ? zoomInKeyframes : zoomInDirectionKeyframes(direction) )
  )
);

export const zoomInTransition = (animationConfig?: Partial<ZoomInConfig>, animationOptions?: AnimationOptions | null): TransitionConfig => {
  animationConfig = { ...{direction: AnimationDirections.In}, ...animationConfig};
  return {
    animationReferenceMetadata: zoomInAnimation((animationConfig.direction) || AnimationDirections.In ),
    animationConfig,
    animationOptions: {...animationOptions ,...{params: {...{translate: '1000px'}, ...animationOptions?.params} }}
  }
}

export function zoomIn(config?: Partial<ZoomInConfig>): AnimationTriggerMetadata {
  config = { ...{direction: AnimationDirections.In}, ...config}
  return buildTrigger(
    {
      triggerName: (config && config.triggerName) || 'zoom' + ( (config.direction === AnimationDirections.In) ? AnimationDirections.In : AnimationDirections.In + config.direction),
      transitions: zoomInTransition(config)
    }
  )
}


