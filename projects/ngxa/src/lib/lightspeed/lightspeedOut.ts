import {animate, keyframes, style, AnimationTriggerMetadata, animation, AnimationOptions, AnimationStyleMetadata, AnimationReferenceMetadata} from "@angular/animations";
import {DefaultAnimationConfig, directionTranslate3d, overwriteDefaultAnimationOptions, AnimationConfig, TransitionConfig, AnimationDirections, AnimationDirection} from "../common";
import {buildTrigger} from "../base";

const lightspeedOutKeyframes = (direction: LightspeedOutAnimationDirection): AnimationStyleMetadata[] => [
  style({ opacity: 1, easing:'ease-out', offset: 0 }),
  style({ opacity: 0, easing:'ease-out', transform: directionTranslate3d(directionTranslateValue(direction) ,direction) + ' ' + directionSkewValue(direction), offset: 1 }),
];

type LightspeedOutAnimationDirection = Extract<AnimationDirection, 'Left' | 'Right'>;

interface LightspeedOutConfig extends AnimationConfig{
  translate: string;
  direction: LightspeedOutAnimationDirection;
}

const DefaultLightspeedOutConfig: LightspeedOutConfig = {...DefaultAnimationConfig, ...{direction: AnimationDirections.Left, translate:'100%', triggerName: 'lightspeedOut'}};

function directionTranslateValue(direction: LightspeedOutAnimationDirection): string{
  switch (direction) {
    case AnimationDirections.Left:
      return '-{{translate}}';
    case AnimationDirections.Right:
      return '{{translate}}';
    default:
      return '-{{translate}}';
  }
}
function directionSkewValue( direction: LightspeedOutAnimationDirection): string{
  return (direction === 'Left') ? 'skewX(-30deg)' : 'skewX(30deg)';
}
const lightspeedOutAnimation = (direction: LightspeedOutAnimationDirection): AnimationReferenceMetadata =>  animation( animate('{{timings}} {{delay}}', keyframes(lightspeedOutKeyframes( direction ) ) ));

export const lightspeedOutTransition = (animationConfig?: Partial<LightspeedOutConfig>, animationOptions: AnimationOptions | null = null): TransitionConfig => {
  const configs: LightspeedOutConfig = { ...DefaultLightspeedOutConfig, ...animationConfig};
  return {
    animationReferenceMetadata: lightspeedOutAnimation(configs.direction),
    animationConfig,
    animationOptions: overwriteDefaultAnimationOptions({translate: configs.translate}, animationOptions)
  }
}

export function lightspeedOut(config?: Partial<LightspeedOutConfig>): AnimationTriggerMetadata {
  const configs: LightspeedOutConfig = { ...DefaultLightspeedOutConfig, ...config}
  return buildTrigger(
    {
      triggerName: (config && config.triggerName) || configs.triggerName + configs.direction,
      transitions: lightspeedOutTransition(config)
    }
  )
}
