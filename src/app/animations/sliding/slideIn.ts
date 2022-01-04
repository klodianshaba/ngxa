import {animate, keyframes, style, AnimationTriggerMetadata, animation, AnimationOptions, AnimationStyleMetadata, AnimationReferenceMetadata} from "@angular/animations";
import {buildTrigger, DefaultAnimationConfig, directionTranslate3d, overwriteDefaultAnimationOptions} from "../wrapper";
import {AnimationConfig, TransitionConfig, AnimationDirections, AnimationDirection} from "../wrapper";

const slideInKeyframes = (direction: SlideInAnimationDirection): AnimationStyleMetadata[] => [
  style({ visibility: 'visible', transform: directionTranslate3d( slideInDirectionTranslate(direction), direction),  offset: 0 }),
  style({ transform: 'translate3d(0, 0, 0)', offset: 1 }),
];

function slideInDirectionTranslate(direction: SlideInAnimationDirection): string{
  switch (direction) {
    case AnimationDirections.Left:
      return '-{{translate}}';
    case AnimationDirections.Right:
      return '{{translate}}';
    case AnimationDirections.Up:
      return '{{translate}}';
    case AnimationDirections.Down:
      return '-{{translate}}';
    default:
      return '-{{translate}}';
  }
}

type SlideInAnimationDirection = Extract<AnimationDirection, 'Down' | 'Up' |'Left' | 'Right'>;

interface SlideInConfig extends AnimationConfig{
  translate: string;
  direction: SlideInAnimationDirection;
}

const DefaultSlideInConfig: SlideInConfig = {...DefaultAnimationConfig, ...{direction: AnimationDirections.Left, translate:'100%', triggerName: 'slideIn'}};

const slideInAnimation = (direction: SlideInAnimationDirection): AnimationReferenceMetadata => animation( animate('{{timings}} {{delay}}', keyframes(slideInKeyframes( direction ) ) ));

export const slideInTransition = (animationConfig?: Partial<SlideInConfig>, animationOptions: AnimationOptions | null = null): TransitionConfig => {
  const configs: SlideInConfig = { ...DefaultSlideInConfig, ...animationConfig};
  return {
    animationReferenceMetadata: slideInAnimation(configs.direction),
    animationConfig,
    animationOptions: overwriteDefaultAnimationOptions({translate: configs.translate}, animationOptions)
  }
}

export function slideIn(config?: Partial<SlideInConfig>): AnimationTriggerMetadata {
  const configs: SlideInConfig = { ...DefaultSlideInConfig, ...config}
  return buildTrigger(
    {
      triggerName: (config && config.triggerName) || configs.triggerName + configs.direction,
      transitions: slideInTransition(config)
    }
  )
}
