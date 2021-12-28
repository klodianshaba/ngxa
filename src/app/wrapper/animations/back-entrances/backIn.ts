import {animate, keyframes, style, AnimationTriggerMetadata, animation, AnimationOptions, AnimationStyleMetadata, AnimationReferenceMetadata} from "@angular/animations";
import {buildTrigger} from "../../base";
import {AnimationConfig, TransitionConfig, AnimationDirections, AnimationDirection} from "../../common";

export const backInKeyframes = (direction?: AnimationDirection): AnimationStyleMetadata[] => [
  style({ opacity: 0.7, transform: backInDirectionTranslate(direction) + ' scale(0.7)',  offset: 0 }),
  style({ opacity: 0.7, transform: 'translateY(0px) scale(0.7)', offset: 0.8 }),
  style({ opacity: 1, transform: 'scale(1)', offset: 1 })
];

export interface BackInConfig extends AnimationConfig{
  translate: string;
  direction: AnimationDirection;
}

export function backInDirectionTranslate(direction?: AnimationDirection): string{
  switch (direction){
    case AnimationDirections.Left:
      return 'translateX(-{{translate}})';
    case AnimationDirections.Right:
      return 'translateX({{translate}})';
    case AnimationDirections.Up:
      return 'translateY({{translate}})';
    case AnimationDirections.Down:
      return 'translateY(-{{translate}})';
    default:
      return 'translateX(-{{translate}})';
  }
}

export const backInAnimation = (direction?: AnimationDirection): AnimationReferenceMetadata =>  animation( animate('{{timings}} {{delay}}', keyframes(backInKeyframes( direction ) ) ));

export const backInTransition = (animationConfig?: Partial<BackInConfig>, animationOptions?: AnimationOptions | null): TransitionConfig => {
  return {
    animationReferenceMetadata: backInAnimation((animationConfig && animationConfig.direction)),
    animationConfig,
    animationOptions: {...animationOptions ,...{params: {...{translate: '1200px'}, ...animationOptions?.params} }}
  }
}

export function backIn(config?: Partial<BackInConfig>): AnimationTriggerMetadata {
  return buildTrigger(
    {
      triggerName: (config && config.triggerName) || 'backIn' + ( (config && config.direction) || AnimationDirections.Left ),
      transitions: backInTransition(config)
    }
  )
}
