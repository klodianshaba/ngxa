import {animate, keyframes, style, AnimationTriggerMetadata, animation, AnimationOptions, AnimationStyleMetadata, AnimationReferenceMetadata} from "@angular/animations";
import {DefaultAnimationConfig, directionTranslate3d, overwriteDefaultAnimationOptions, AnimationConfig, TransitionConfig, AnimationDirections, AnimationDirection} from "../common";
import {buildTrigger} from "../base";

const slideOutKeyframes = (direction: SlideOutAnimationDirection): AnimationStyleMetadata[] => [
  style({ transform: 'translate3d(0, 0, 0)', offset: 0 }),
  style({ visibility: 'visible', transform: directionTranslate3d( slideOutDirectionTranslate(direction), direction),  offset: 1 }),
];

function slideOutDirectionTranslate(direction: SlideOutAnimationDirection): string{
  switch (direction) {
    case AnimationDirections.Left:
      return '-{{translate}}';
    case AnimationDirections.Right:
      return '{{translate}}';
    case AnimationDirections.Up:
      return '-{{translate}}';
    case AnimationDirections.Down:
      return '{{translate}}';
    default:
      return '-{{translate}}';
  }
}

type SlideOutAnimationDirection = Extract<AnimationDirection, 'Down' | 'Up' |'Left' | 'Right'>;

interface SlideOutConfig extends AnimationConfig{
  translate: string;
  direction: SlideOutAnimationDirection;
}

const DefaultSlideOutConfig: SlideOutConfig = {...DefaultAnimationConfig, ...{direction: AnimationDirections.Left, translate:'100%', triggerName: 'slideOut'}};

const slideOutAnimation = (direction: SlideOutAnimationDirection): AnimationReferenceMetadata => animation( animate('{{timings}} {{delay}}', keyframes(slideOutKeyframes( direction ) ) ));

export const slideOutTransition = (animationConfig?: Partial<SlideOutConfig>, animationOptions: AnimationOptions | null = null): TransitionConfig => {
  const configs: SlideOutConfig = { ...DefaultSlideOutConfig, ...animationConfig};
  return {
    animationReferenceMetadata: slideOutAnimation(configs.direction),
    animationConfig,
    animationOptions: overwriteDefaultAnimationOptions({translate: configs.translate}, animationOptions)
  }
}

export function slideOut(config?: Partial<SlideOutConfig>): AnimationTriggerMetadata {
  const configs: SlideOutConfig = {...DefaultSlideOutConfig, ...config}
  return buildTrigger(
    {
      triggerName: (config && config.triggerName) || configs.triggerName + configs.direction,
      transitions: slideOutTransition(config)
    }
  )
}
