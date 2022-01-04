import {animate, keyframes, style, AnimationTriggerMetadata, animation, AnimationOptions, AnimationStyleMetadata, AnimationReferenceMetadata} from "@angular/animations";
import {AnimationConfig, AnimationDirection, AnimationDirections, TransitionConfig, isLeftOrUpDirection, directionTranslate3d, DefaultAnimationConfig, overwriteDefaultAnimationOptions} from "../common";
import {buildTrigger} from '../base';
export const bounceOutKeyframes: AnimationStyleMetadata[] = [
  style({ transform: 'scale3d(0.9, 0.9, 0.9)', offset: .2}),
  style({ opacity: 1, transform: 'scale3d(1.1, 1.1, 1.1)', offset: .5}),
  style({ opacity: 1, transform: 'scale3d(1.1, 1.1, 1.1)', offset: .55}),
  style({ opacity: 0, transform: 'scale3d(0.3, 0.3, 0.3)', offset: 1}),
];

export const bounceOutDirectionKeyframes = (direction: AnimationDirection): AnimationStyleMetadata[] => [
  style({ transform: directionTranslate3d((isLeftOrUpDirection(direction)) ? '-10px':'10px', direction), offset: 0.2 }),
  style({ transform: directionTranslate3d((isLeftOrUpDirection(direction)) ? '20px':'-20px', direction) , offset: 0.4 }) ,
  style({ transform: directionTranslate3d((isLeftOrUpDirection(direction)) ? '20px':'-20px', direction), offset: 0.45 }),
  style({ transform: directionTranslate3d(  (isLeftOrUpDirection(direction) ) ? '-{{translate}}':'{{translate}}', direction), offset: 1 }),
];

type BounceOutAnimationDirection = Extract<AnimationDirection, 'Out' | 'Down' | 'Up' |'Left' | 'Right'>;

const DefaultBounceOutConfig: BounceOutConfig = {...DefaultAnimationConfig, ...{direction: AnimationDirections.Out, translate:'2000px', triggerName: 'bounce'}};

interface BounceOutConfig extends AnimationConfig {
  translate: string;
  direction: BounceOutAnimationDirection;
}

function defaultTriggerName(configs: BounceOutConfig): string {
  return configs.triggerName + ( (configs.direction === AnimationDirections.Out) ? AnimationDirections.Out  : AnimationDirections.Out + configs.direction);
}

const bounceOutAnimation = (direction: AnimationDirection): AnimationReferenceMetadata =>  animation(
  animate('{{timings}} {{delay}}',
    keyframes( (direction === AnimationDirections.Out) ? bounceOutKeyframes : bounceOutDirectionKeyframes(direction) )
  )
);

export const bounceOutTransition = (animationConfig?: Partial<BounceOutConfig>, animationOptions: AnimationOptions | null = null): TransitionConfig => {
  const configs: BounceOutConfig = { ...DefaultBounceOutConfig, ...animationConfig}
  return {
    animationReferenceMetadata: bounceOutAnimation(configs.direction),
    animationConfig,
    animationOptions: overwriteDefaultAnimationOptions({translate: configs.translate}, animationOptions)
  }
}

export function bounceOut(config?: Partial<BounceOutConfig>): AnimationTriggerMetadata {
  const configs: BounceOutConfig = { ...DefaultBounceOutConfig, ...config}
  return buildTrigger(
    {
      triggerName: (config && config.triggerName) || defaultTriggerName(configs),
      transitions: bounceOutTransition(config)
    }
  )
}

