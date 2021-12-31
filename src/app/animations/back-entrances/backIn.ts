import {animate, keyframes, style, AnimationTriggerMetadata, animation, AnimationOptions, AnimationStyleMetadata, AnimationReferenceMetadata} from "@angular/animations";
import {buildTrigger, DefaultAnimationConfig, overwriteDefaultAnimationOptions} from "../wrapper";
import {AnimationConfig, TransitionConfig, AnimationDirections, AnimationDirection} from "../wrapper";

const backInKeyframes = (direction: BackInAnimationDirection): AnimationStyleMetadata[] => [
  style({ opacity: 0.7, transform: backInDirectionTranslate(direction) + ' scale(0.7)',  offset: 0 }),
  style({ opacity: 0.7, transform: 'translateY(0px) scale(0.7)', offset: 0.8 }),
  style({ opacity: 1, transform: 'scale(1)', offset: 1 })
];

type BackInAnimationDirection = Extract<AnimationDirection, 'Down' | 'Up' |'Left' | 'Right'>;

interface BackInConfig extends AnimationConfig{
  translate: string;
  direction: BackInAnimationDirection;
}

const DefaultBackInConfig: BackInConfig = {...DefaultAnimationConfig, ...{direction: AnimationDirections.Left, translate:'1200px', triggerName: 'backIn'}};

function backInDirectionTranslate(direction: BackInAnimationDirection): string{
  switch (direction) {
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

const backInAnimation = (direction: BackInAnimationDirection): AnimationReferenceMetadata =>  animation( animate('{{timings}} {{delay}}', keyframes(backInKeyframes( direction ) ) ));

export const backInTransition = (animationConfig?: Partial<BackInConfig>, animationOptions: AnimationOptions | null = null): TransitionConfig => {
  const configs: BackInConfig = { ...DefaultBackInConfig, ...animationConfig};
  return {
    animationReferenceMetadata: backInAnimation(configs.direction),
    animationConfig,
    animationOptions: overwriteDefaultAnimationOptions({translate: configs.translate}, animationOptions)
  }
}

export function backIn(config?: Partial<BackInConfig>): AnimationTriggerMetadata {
  const configs: BackInConfig = { ...DefaultBackInConfig, ...config}
  return buildTrigger(
    {
      triggerName: (config && config.triggerName) || configs.triggerName + configs.direction,
      transitions: backInTransition(config)
    }
  )
}
