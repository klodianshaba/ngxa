import {
  animate,
  animation,
  AnimationOptions,
  AnimationReferenceMetadata,
  AnimationStyleMetadata,
  AnimationTriggerMetadata,
  keyframes,
  style
} from "@angular/animations";

import {
  AnimationConfig,
  AnimationDirections,
  buildTrigger,
  DefaultAnimationConfig,
  RotateAnimationDirection,
  RotateAnimationDirections,
  TransitionConfig
} from "../wrapper";


const rotateInDirectionKeyframes = (direction: RotateAnimationDirection): AnimationStyleMetadata[] => [
  style({ opacity: 0 , 'transform-origin': rotateInTransformOriginValue(direction), transform: 'rotate3d(0, 0, 1, {{degrees}}deg)', offset: 0}),
  style({ opacity: 1 , 'transform-origin': rotateInTransformOriginValue(direction), transform: 'translate3d(0, 0, 0)', offset: 1}),
];

export function rotateInTransformOriginValue(direction: RotateAnimationDirection): string{
  switch (direction){
    case AnimationDirections.In:
      return 'center';
    case RotateAnimationDirections.DownLeft:
      return 'left bottom';
    case RotateAnimationDirections.DownRight:
      return 'right bottom';
    case RotateAnimationDirections.UpLeft:
      return 'left bottom';
    case RotateAnimationDirections.UpRight:
      return 'right bottom';
    default:
      return 'center';
  }
}


function defaultRotateDirectionDegree(direction: RotateAnimationDirection): number{
  switch (direction) {
    case AnimationDirections.In:
      return -200;
    case RotateAnimationDirections.DownLeft:
      return -45;
    case RotateAnimationDirections.DownRight:
      return 45;
    case RotateAnimationDirections.UpLeft:
      return 45;
    case RotateAnimationDirections.UpRight:
      return -45;
    default:
      return -200;
  }
}


interface RotateInConfig extends AnimationConfig{
  degrees: number;
  direction: RotateAnimationDirection;
}

const rotateInAnimation = (direction: RotateAnimationDirection): AnimationReferenceMetadata =>  animation(
  animate('{{timings}} {{delay}}', keyframes( rotateInDirectionKeyframes(direction) ))
);

const DefaultRotateInConfig: RotateInConfig = {...DefaultAnimationConfig, ...{direction: AnimationDirections.In, degrees:-200, triggerName: 'rotateIn'}};

export const rotateInTransition = (animationConfig?: Partial<RotateInConfig>, animationOptions?: AnimationOptions | null): TransitionConfig => {
  let configs: RotateInConfig = { ...DefaultRotateInConfig, ...animationConfig};
  return {
    animationReferenceMetadata: rotateInAnimation(configs.direction),
    animationConfig,
    animationOptions: {...animationOptions ,...{params: {...{degrees: (animationConfig && animationConfig.degrees) || defaultRotateDirectionDegree(configs.direction) }, ...animationOptions?.params} }}
  }
}

export function rotateIn(config?: Partial<RotateInConfig>): AnimationTriggerMetadata {
  let configs: RotateInConfig = { ...DefaultRotateInConfig, ...config}
  return buildTrigger(
    {
      triggerName: (config && config.triggerName) || configs.triggerName + (configs.direction !== AnimationDirections.In) ? configs.direction : '',
      transitions: rotateInTransition(config)
    }
  )
}
