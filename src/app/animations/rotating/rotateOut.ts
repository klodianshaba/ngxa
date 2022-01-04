import {animate, animation, AnimationOptions, AnimationReferenceMetadata, AnimationStyleMetadata, AnimationTriggerMetadata, keyframes, style} from "@angular/animations";
import {AnimationConfig, AnimationDirection, AnimationDirections, buildTrigger, DefaultAnimationConfig, overwriteDefaultAnimationOptions, TransitionConfig} from "../wrapper";

const rotateOutDirectionKeyframes = (direction: RotateOutAnimationDirection): AnimationStyleMetadata[] => [
  style({ opacity: 1, offset: 0}),
  style({ opacity: 0 , 'transform-origin': rotateOutTransformOriginValue(direction), transform: 'rotate3d(0, 0, 1, {{degrees}}deg)', offset: 1}),
];

export function rotateOutTransformOriginValue(direction: RotateOutAnimationDirection): string{
  switch (direction){
    case AnimationDirections.Out:
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

function defaultRotateDirectionDegree(direction: RotateOutAnimationDirection): number{
  switch (direction) {
    case AnimationDirections.Out:
      return 200;
    case AnimationDirections.DownLeft:
      return 45;
    case AnimationDirections.DownRight:
      return -45;
    case AnimationDirections.UpLeft:
      return -45;
    case AnimationDirections.UpRight:
      return 45;
    default:
      return 200;
  }
}

function defaultTriggerName(configs: RotateOutConfig): string {
  return configs.triggerName + ( (configs.direction === AnimationDirections.Out) ? AnimationDirections.Out : AnimationDirections.Out + configs.direction);
}

interface RotateOutConfig extends AnimationConfig{
  degrees: number;
  direction: RotateOutAnimationDirection;
}

type RotateOutAnimationDirection = Extract<AnimationDirection, 'Out' | 'DownLeft' | 'DownRight' |'UpLeft' | 'UpRight'>;

const DefaultRotateOutConfig: RotateOutConfig = {...DefaultAnimationConfig, ...{direction: AnimationDirections.Out, degrees:-200, triggerName: 'rotate'}};

const rotateOutAnimation = (direction: RotateOutAnimationDirection): AnimationReferenceMetadata =>  animation(
  animate('{{timings}} {{delay}}', keyframes( rotateOutDirectionKeyframes(direction) ))
);

export const rotateOutTransition = (animationConfig?: Partial<RotateOutConfig>, animationOptions: AnimationOptions | null = null): TransitionConfig => {
  const configs: RotateOutConfig = { ...DefaultRotateOutConfig, ...animationConfig};
  const degrees = (animationConfig && animationConfig.degrees) || defaultRotateDirectionDegree(configs.direction);
  return {
    animationReferenceMetadata: rotateOutAnimation(configs.direction),
    animationConfig,
    animationOptions: overwriteDefaultAnimationOptions( {degrees}, animationOptions)
  }
}

export function rotateOut(config?: Partial<RotateOutConfig>): AnimationTriggerMetadata {
  const configs: RotateOutConfig = { ...DefaultRotateOutConfig, ...config}
  return buildTrigger(
    {
      triggerName: (config && config.triggerName) || defaultTriggerName(configs),
      transitions: rotateOutTransition(config)
    }
  )
}
