import {animate, animation, AnimationOptions, AnimationReferenceMetadata, AnimationStyleMetadata, AnimationTriggerMetadata, keyframes, style} from "@angular/animations";
import {AnimationConfig, AnimationDirection, AnimationDirections, buildTrigger, DefaultAnimationConfig, overwriteDefaultAnimationOptions, TransitionConfig} from "../wrapper";

const rotateInDirectionKeyframes = (direction: RotateInAnimationDirection): AnimationStyleMetadata[] => [
  style({ opacity: 0 , 'transform-origin': rotateInTransformOriginValue(direction), transform: 'rotate3d(0, 0, 1, {{degrees}}deg)', offset: 0}),
  style({ opacity: 1 , 'transform-origin': rotateInTransformOriginValue(direction), transform: 'translate3d(0, 0, 0)', offset: 1}),
];

export function rotateInTransformOriginValue(direction: RotateInAnimationDirection): string{
  switch (direction){
    case AnimationDirections.In:
      return 'center';
    case AnimationDirections.DownLeft:
      return 'left bottom';
    case AnimationDirections.DownRight:
      return 'right bottom';
    case AnimationDirections.UpLeft:
      return 'left bottom';
    case AnimationDirections.UpRight:
      return 'right bottom';
    default:
      return 'center';
  }
}


function defaultRotateDirectionDegree(direction: RotateInAnimationDirection): number{
  switch (direction) {
    case AnimationDirections.In:
      return -200;
    case AnimationDirections.DownLeft:
      return -45;
    case AnimationDirections.DownRight:
      return 45;
    case AnimationDirections.UpLeft:
      return 45;
    case AnimationDirections.UpRight:
      return -45;
    default:
      return -200;
  }
}

function defaultTriggerName(configs: RotateInConfig): string {
 return configs.triggerName + ( (configs.direction === AnimationDirections.In) ? AnimationDirections.In : AnimationDirections.In + configs.direction);
}

interface RotateInConfig extends AnimationConfig{
  degrees: number;
  direction: RotateInAnimationDirection;
}

type RotateInAnimationDirection = Extract<AnimationDirection, 'In' | 'DownLeft' | 'DownRight' |'UpLeft' | 'UpRight'>;

const DefaultRotateInConfig: RotateInConfig = {...DefaultAnimationConfig, ...{direction: AnimationDirections.In, degrees:-200, triggerName: 'rotate'}};

const rotateInAnimation = (direction: RotateInAnimationDirection): AnimationReferenceMetadata =>  animation(
  animate('{{timings}} {{delay}}', keyframes( rotateInDirectionKeyframes(direction) ))
);

export const rotateInTransition = (animationConfig?: Partial<RotateInConfig>, animationOptions: AnimationOptions | null = null): TransitionConfig => {
  const configs: RotateInConfig = { ...DefaultRotateInConfig, ...animationConfig};
  const degrees = (animationConfig && animationConfig.degrees) || defaultRotateDirectionDegree(configs.direction);
  return {
    animationReferenceMetadata: rotateInAnimation(configs.direction),
    animationConfig,
    animationOptions: overwriteDefaultAnimationOptions( {degrees}, animationOptions)
  }
}

export function rotateIn(config?: Partial<RotateInConfig>): AnimationTriggerMetadata {
  const configs: RotateInConfig = { ...DefaultRotateInConfig, ...config}
  return buildTrigger(
    {
      triggerName: (config && config.triggerName) || defaultTriggerName(configs),
      transitions: rotateInTransition(config)
    }
  )
}
