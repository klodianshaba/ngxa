import {animate, keyframes, style, AnimationTriggerMetadata, animation, AnimationOptions, AnimationStyleMetadata, AnimationReferenceMetadata} from "@angular/animations";
import {DefaultAnimationConfig, directionTranslate3d, overwriteDefaultAnimationOptions, AnimationConfig, TransitionConfig, AnimationDirections, AnimationDirection} from "../common";
import {buildTrigger} from "../base";

const lightspeedInKeyframes = (direction: LightspeedInAnimationDirection): AnimationStyleMetadata[] => [
  style({ opacity: 0, easing:'ease-out', transform: directionTranslate3d(directionTranslateValue(direction) ,direction) + ' ' + directionSkewValue(0,direction), offset: 0 }),
  style({ opacity: 1, easing:'ease-out', transform: directionSkewValue(0.6,direction), offset: 0.6 }),
  style({ easing:'ease-out', transform: directionSkewValue(0.8,direction), offset: 0.8 }),
  style({ easing:'ease-out', transform: 'translate3d(0, 0, 0)', offset: 1 })
];

type LightspeedInAnimationDirection = Extract<AnimationDirection, 'Left' | 'Right'>;

interface LightspeedInConfig extends AnimationConfig{
  translate: string;
  direction: LightspeedInAnimationDirection;
}

const DefaultLightspeedInConfig: LightspeedInConfig = {...DefaultAnimationConfig, ...{direction: AnimationDirections.Left, translate:'100%', triggerName: 'lightspeedIn'}};

function directionTranslateValue(direction: LightspeedInAnimationDirection): string{
  switch (direction) {
    case AnimationDirections.Left:
      return '-{{translate}}';
    case AnimationDirections.Right:
      return '{{translate}}';
    default:
      return '-{{translate}}';
  }
}
function directionSkewValue(offset:0 | 0.6 | 0.8 , direction: LightspeedInAnimationDirection): string{
  switch (offset) {
    case 0:
      return (direction === 'Left') ? 'skewX(30deg)' : 'skewX(-30deg)';
    case 0.6:
      return (direction === 'Left') ? 'skewX(-20deg)' : 'skewX(20deg)';
    case 0.8:
      return (direction === 'Left') ? 'skewX(5deg)' : 'skewX(-5deg)';
    default:
      return (direction === 'Left') ? 'skewX(30deg)' : 'skewX(-30deg)';
  }
}
const lightspeedInAnimation = (direction: LightspeedInAnimationDirection): AnimationReferenceMetadata =>  animation( animate('{{timings}} {{delay}}', keyframes(lightspeedInKeyframes( direction ) ) ));

export const lightspeedInTransition = (animationConfig?: Partial<LightspeedInConfig>, animationOptions: AnimationOptions | null = null): TransitionConfig => {
  const configs: LightspeedInConfig = { ...DefaultLightspeedInConfig, ...animationConfig};
  return {
    animationReferenceMetadata: lightspeedInAnimation(configs.direction),
    animationConfig,
    animationOptions: overwriteDefaultAnimationOptions({translate: configs.translate}, animationOptions)
  }
}

export function lightspeedIn(config?: Partial<LightspeedInConfig>): AnimationTriggerMetadata {
  const configs: LightspeedInConfig = { ...DefaultLightspeedInConfig, ...config}
  return buildTrigger(
    {
      triggerName: (config && config.triggerName) || configs.triggerName + configs.direction,
      transitions: lightspeedInTransition(config)
    }
  )
}
