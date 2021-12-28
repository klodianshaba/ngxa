import {animate, keyframes, style, AnimationTriggerMetadata, animation, AnimationOptions, AnimationStyleMetadata, AnimationReferenceMetadata} from "@angular/animations";
import {buildTrigger} from "../../base";
import {AnimationConfig, TransitionConfig, AnimationDirections, AnimationDirection} from "../../common";

export const backOutKeyframes = (direction?: AnimationDirection): AnimationStyleMetadata[] => [
  style({ opacity: 1, transform: 'scale(1)', offset: 0 }),
  style({ opacity: 0.7, transform: 'translateY(0px) scale(0.7)', offset: 0.2 }),
  style({ opacity: 0.7, transform: backOutDirectionTranslate(direction) + ' scale(0.7)',  offset: 1 }),
];

export interface BackOutConfig extends AnimationConfig{
  translate: string;
  direction: AnimationDirection;
}

export function backOutDirectionTranslate(direction?: AnimationDirection): string{
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

export const backOutAnimation = (direction?: AnimationDirection): AnimationReferenceMetadata =>  animation( animate('{{timings}} {{delay}}', keyframes(backOutKeyframes( direction ) ) ));

export const backOutTransition = (animationConfig?: Partial<BackOutConfig>, animationOptions?: AnimationOptions | null): TransitionConfig => {
  return {
    animationReferenceMetadata: backOutAnimation((animationConfig && animationConfig.direction)),
    animationConfig,
    animationOptions: {...animationOptions ,...{params: {...{translate: '1200px'}, ...animationOptions?.params} }}
  }
}

export function backOut(config?: Partial<BackOutConfig>): AnimationTriggerMetadata {
  return buildTrigger(
    {
      triggerName: (config && config.triggerName) || 'backOut' + ( (config && config.direction) || AnimationDirections.Left ),
      transitions: backOutTransition(config)
    }
  )
}
