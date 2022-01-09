
import {animate, keyframes, style, AnimationTriggerMetadata, animation, AnimationOptions, AnimationStyleMetadata, AnimationReferenceMetadata} from "@angular/animations";
import {AnimationConfig, AnimationDirection, AnimationDirections, isLeftOrDownDirection, TransitionConfig,
  directionTranslate3d, isYDirection, DefaultAnimationConfig, overwriteDefaultAnimationOptions
} from "../common";
import {buildTrigger} from '../base';

const zoomInKeyframes: AnimationStyleMetadata[] = [
  style({ opacity: 0, visibility: 'visible', transform: 'scale3d(0.3, 0.3, 0.3)', easing: 'ease', offset: 0}),
  style({ opacity: 1, transform: 'scale3d(1, 1, 1)', easing: 'ease', offset: 1})
];

const zoomInDirectionKeyframes = (direction: AnimationDirection): AnimationStyleMetadata[] => [
  style({ opacity: 0, transform: 'scale3d(0.1, 0.1, 0.1) ' + directionTranslate3d( zoomInDirectionTranslateValue(0,direction) , direction), easing: 'ease', offset: 0 }),
  style({ opacity: 1, transform: 'scale3d(0.475, 0.475, 0.475) ' + directionTranslate3d( zoomInDirectionTranslateValue(0.6,direction), direction), easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)', offset: 0.6 }),
  style({ opacity: 1, transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)', offset: 1 })
];

function zoomInDirectionTranslateValue(offset: 0 | 0.6, direction: AnimationDirection): string{
  switch (offset) {
    case 0:
      return (isLeftOrDownDirection(direction) ) ? '-{{translate}}':'{{translate}}';
    case 0.6:
     return ((isLeftOrDownDirection(direction)) ? '' : '-') + ((isYDirection(direction)) ? '60px' : '10px')
  }
}

function defaultTriggerName(configs: ZoomInConfig): string {
  return configs.triggerName + ( (configs.direction === AnimationDirections.In) ? AnimationDirections.In : AnimationDirections.In + configs.direction);
}

type ZoomInAnimationDirection = Extract<AnimationDirection, 'In' | 'Down' | 'Up' |'Left' | 'Right'>;

const DefaultZoomInConfig: ZoomInConfig = {...DefaultAnimationConfig, ...{direction: AnimationDirections.In, translate:'1000px', triggerName: 'zoom'}};

interface ZoomInConfig extends AnimationConfig{
  translate: string;
  direction: ZoomInAnimationDirection;
}

const zoomInAnimation = (direction: AnimationDirection): AnimationReferenceMetadata =>  animation(
  animate('{{timings}} {{delay}}',
    keyframes( (direction === AnimationDirections.In) ? zoomInKeyframes : zoomInDirectionKeyframes(direction) )
  )
);

export const zoomInTransition = (animationConfig?: Partial<ZoomInConfig>, animationOptions: AnimationOptions | null = null): TransitionConfig => {
  const configs: ZoomInConfig = { ...DefaultZoomInConfig, ...animationConfig};
  return {
    animationReferenceMetadata: zoomInAnimation(configs.direction),
    animationConfig,
    animationOptions: overwriteDefaultAnimationOptions({translate: configs.translate}, animationOptions)
  }
}

export function zoomIn(config?: Partial<ZoomInConfig>): AnimationTriggerMetadata {
  const configs: ZoomInConfig = { ...DefaultZoomInConfig, ...config}
  return buildTrigger(
    {
      triggerName: (config && config.triggerName) || defaultTriggerName(configs),
      transitions: zoomInTransition(config)
    }
  )
}


