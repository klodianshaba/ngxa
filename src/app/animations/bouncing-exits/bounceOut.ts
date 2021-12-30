import {animate, keyframes, style, AnimationTriggerMetadata, animation, AnimationOptions, AnimationStyleMetadata, AnimationReferenceMetadata} from "@angular/animations";

import {buildTrigger, AnimationConfig, AnimationDirection, AnimationDirections, TransitionConfig, isLeftOrUpDirection} from "../wrapper";

export const bounceOutKeyframes: AnimationStyleMetadata[] = [
  style({ transform: 'scale3d(0.9, 0.9, 0.9)', offset: .2}),
  style({ opacity: 1, transform: 'scale3d(1.1, 1.1, 1.1)', offset: .5}),
  style({ opacity: 1, transform: 'scale3d(1.1, 1.1, 1.1)', offset: .55}),
  style({ opacity: 0, transform: 'scale3d(0.3, 0.3, 0.3)', offset: 1}),
];

export const bounceOutDirectionKeyframes = (direction: AnimationDirection): AnimationStyleMetadata[] => [
  style({ transform: bounceOutDirectionTranslate((isLeftOrUpDirection(direction)) ? '-10px':'10px', direction), offset: 0.2 }),
  style({ transform: bounceOutDirectionTranslate((isLeftOrUpDirection(direction)) ? '20px':'-20px', direction) , offset: 0.4 }) ,
  style({ transform: bounceOutDirectionTranslate((isLeftOrUpDirection(direction)) ? '20px':'-20px', direction), offset: 0.45 }),
  style({ transform: bounceOutDirectionTranslate(  (isLeftOrUpDirection(direction) ) ? '-{{translate}}':'{{translate}}', direction), offset: 1 }),
];

export interface BounceOutConfig extends AnimationConfig {
  translate: string;
  direction: AnimationDirection;
}

export function bounceOutDirectionTranslate(translate: string, direction?: AnimationDirection): string{
  switch (direction){
    case AnimationDirections.Left:
      return 'translate3d('+ translate +',0 ,0)';
    case AnimationDirections.Right:
      return 'translate3d('+ translate +' ,0 ,0)';
    case AnimationDirections.Up:
      return 'translate3d(0,'+ translate +', 0)';
    case AnimationDirections.Down:
      return 'translate3d(0,'+ translate +', 0)';
    default:
      return 'translate3d('+ translate +',0 ,0)';
  }
}

export const bounceOutAnimation = (direction: AnimationDirection): AnimationReferenceMetadata =>  animation(
  animate('{{timings}} {{delay}}',
    keyframes( (direction === AnimationDirections.Out) ? bounceOutKeyframes : bounceOutDirectionKeyframes(direction) )
  )
);

export const bounceOutTransition = (animationConfig?: Partial<BounceOutConfig>, animationOptions?: AnimationOptions | null): TransitionConfig => {
  animationConfig = { ...{direction: AnimationDirections.Out}, ...animationConfig};
  return {
    animationReferenceMetadata: bounceOutAnimation((animationConfig.direction) || AnimationDirections.Out ),
    animationConfig,
    animationOptions: {...animationOptions ,...{params: {...{translate: '2000px'}, ...animationOptions?.params} }}
  }
}

export function bounceOut(config?: Partial<BounceOutConfig>): AnimationTriggerMetadata {
  config = { ...{direction: AnimationDirections.Out}, ...config}
  return buildTrigger(
    {
      triggerName: (config && config.triggerName) || 'bounce' + ( (config.direction === AnimationDirections.Out) || 'Out' + config.direction),
      transitions: bounceOutTransition(config)
    }
  )
}

