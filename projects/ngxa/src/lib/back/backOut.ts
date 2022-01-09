import {animate, keyframes, style, AnimationTriggerMetadata, animation, AnimationOptions, AnimationStyleMetadata, AnimationReferenceMetadata} from "@angular/animations";
import {DefaultAnimationConfig, overwriteDefaultAnimationOptions,AnimationConfig, TransitionConfig, AnimationDirections, AnimationDirection} from "../common";
import {buildTrigger} from '../base';

const backOutKeyframes = (direction: BackOutAnimationDirection): AnimationStyleMetadata[] => [
  style({ opacity: 1, transform: 'scale(1)', offset: 0 }),
  style({ opacity: 0.7, transform: 'translateY(0px) scale(0.7)', offset: 0.2 }),
  style({ opacity: 0.7, transform: backOutDirectionTranslate(direction) + ' scale(0.7)',  offset: 1 }),
];

type BackOutAnimationDirection = Extract<AnimationDirection, 'Down' | 'Up' |'Left' | 'Right'>;

const DefaultBackOutConfig: BackOutConfig = {...DefaultAnimationConfig, ...{direction: AnimationDirections.Left, translate:'1200px', triggerName: 'backOut'}};

interface BackOutConfig extends AnimationConfig{
  translate: string;
  direction: BackOutAnimationDirection;
}

function backOutDirectionTranslate(direction: BackOutAnimationDirection): string{
  switch (direction){
    case AnimationDirections.Left:
      return 'translateX(-{{translate}})';
    case AnimationDirections.Right:
      return 'translateX({{translate}})';
    case AnimationDirections.Up:
      return 'translateY(-{{translate}})';
    case AnimationDirections.Down:
      return 'translateY({{translate}})';
    default:
      return 'translateX(-{{translate}})';
  }
}

const backOutAnimation = (direction: BackOutAnimationDirection): AnimationReferenceMetadata =>  animation( animate('{{timings}} {{delay}}', keyframes(backOutKeyframes( direction ) ) ));

export const backOutTransition = (animationConfig?: Partial<BackOutConfig>, animationOptions: AnimationOptions | null = null): TransitionConfig => {
  const configs: BackOutConfig = {...DefaultBackOutConfig, ...animationConfig};
  return {
    animationReferenceMetadata: backOutAnimation(configs.direction),
    animationConfig,
    animationOptions: overwriteDefaultAnimationOptions({translate: configs.translate}, animationOptions)
  }
}

export function backOut(config?: Partial<BackOutConfig>): AnimationTriggerMetadata {
  const configs: BackOutConfig = {...DefaultBackOutConfig, ...config};
  return buildTrigger(
    {
      triggerName: (config && config.triggerName) || configs.triggerName + configs.direction,
      transitions: backOutTransition(config)
    }
  )
}
