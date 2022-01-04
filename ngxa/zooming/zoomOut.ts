import {animate, keyframes, style, AnimationTriggerMetadata, animation, AnimationOptions, AnimationStyleMetadata, AnimationReferenceMetadata} from "@angular/animations";
import {AnimationConfig, AnimationDirection, AnimationDirections, TransitionConfig,
  directionTranslate3d, isYDirection, isRightOrDownDirection, DefaultAnimationConfig, overwriteDefaultAnimationOptions
} from "../common";
import {buildTrigger} from "../base";

const zoomOutKeyframes: AnimationStyleMetadata[] = [
  style({  opacity: 1, transform: 'scale3d(1, 1, 1)', easing: 'ease', offset: 0}),
  style({  opacity: 0, transform: 'scale3d(0.3, 0.3, 0.3)', easing: 'ease', offset: 0.5}),
  style({ opacity: 0, easing: 'ease', offset: 1})
];

const zoomOutDirectionKeyframes = (direction: AnimationDirection): AnimationStyleMetadata[] => [
  style({ 'transform-origin': zoomOutTransformOriginValue(direction), opacity: 1, transform: 'scale3d(0.475, 0.475, 0.475) ' + directionTranslate3d( zoomOutDirectionTranslateValue(0.4,direction), direction), easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)', offset: 0.4 }),
  style({ 'transform-origin': zoomOutTransformOriginValue(direction), opacity: 0, transform: 'scale3d(0.1, 0.1, 0.1) ' + directionTranslate3d( zoomOutDirectionTranslateValue(1,direction) , direction), easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)', offset: 1 }),
];

function zoomOutTransformOriginValue(direction: AnimationDirection): string{
  switch (direction){
    case AnimationDirections.Left:
      return 'left center';
    case AnimationDirections.Right:
      return 'right center';
    default:
      return 'center bottom';
  }
}

function zoomOutDirectionTranslateValue(offset: 0.4 | 1, direction: AnimationDirection): string{
  switch (offset) {
    case 0.4:
      return ((isRightOrDownDirection(direction)) ? '-' : '') + ((isYDirection(direction)) ? '60px' : '42px')
    case 1:
      return (isRightOrDownDirection(direction) ) ? '{{translate}}':'-{{translate}}';
  }
}

function defaultTriggerName(configs: ZoomOutConfig): string {
  return configs.triggerName + ( (configs.direction === AnimationDirections.Out) ? AnimationDirections.Out : AnimationDirections.Out + configs.direction);
}

type ZoomOutAnimationDirection = Extract<AnimationDirection, 'Out' | 'Down' | 'Up' |'Left' | 'Right'>;

const DefaultZoomOutConfig: ZoomOutConfig = {...DefaultAnimationConfig, ...{direction: AnimationDirections.Out, translate:'2000px', triggerName: 'zoom'}};

export interface ZoomOutConfig extends AnimationConfig{
  translate: string;
  direction: ZoomOutAnimationDirection;
}

const zoomOutAnimation = (direction: AnimationDirection): AnimationReferenceMetadata =>  animation(
  animate('{{timings}} {{delay}}',
    keyframes( (direction === AnimationDirections.Out) ? zoomOutKeyframes : zoomOutDirectionKeyframes(direction) )
  )
);

export const zoomOutTransition = (animationConfig?: Partial<ZoomOutConfig>, animationOptions: AnimationOptions | null = null): TransitionConfig => {
  const configs: ZoomOutConfig = { ...DefaultZoomOutConfig, ...animationConfig};
  return {
    animationReferenceMetadata: zoomOutAnimation(configs.direction),
    animationConfig,
    animationOptions: overwriteDefaultAnimationOptions({translate: configs.translate}, animationOptions)
  }
}

export function zoomOut(config?: Partial<ZoomOutConfig>): AnimationTriggerMetadata {
  const configs: ZoomOutConfig = { ...DefaultZoomOutConfig, ...config}
  return buildTrigger(
    {
      triggerName: (config && config.triggerName) || defaultTriggerName(configs),
      transitions: zoomOutTransition(config)
    }
  )
}
