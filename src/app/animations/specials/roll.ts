import {animate, keyframes, style, AnimationTriggerMetadata, animation, AnimationOptions, AnimationStyleMetadata, AnimationReferenceMetadata} from "@angular/animations";
import {buildTrigger, DefaultAnimationConfig, overwriteDefaultAnimationOptions} from "../wrapper";
import {AnimationConfig, TransitionConfig, AnimationDirections, AnimationDirection} from "../wrapper";

const rollKeyframes = (direction: RollAnimationDirection): AnimationStyleMetadata[] => [
  style({ opacity: rollDirectionOpacity(0, direction),  transform: rollDirectionTransform(0, direction ), offset: 0 }),
  style({ opacity: rollDirectionOpacity(1, direction),  transform: rollDirectionTransform(1, direction ), offset: 1 }),
];

function rollDirectionOpacity(offset:0 | 1 , direction: RollAnimationDirection): number{
  switch (offset) {
    case 0:
      return (direction === AnimationDirections.In) ? 0 : 1;
    case 1:
      return (direction === AnimationDirections.In) ? 1 : 0;
  }
}

function rollDirectionTransform(offset:0 | 1 , direction: RollAnimationDirection): string{
  switch (offset) {
    case 0:
      return (direction === AnimationDirections.In) ? 'translate3d(-{{translate}}, 0, 0) rotate3d(0, 0, 1, -{{degrees}}deg)' : '';
    case 1:
      return (direction === AnimationDirections.In) ? 'translate3d(0, 0, 0)' : 'translate3d({{translate}}, 0, 0) rotate3d(0, 0, 1, {{degrees}}deg)';
    default:
      return '';
  }
}

type RollAnimationDirection = Extract<AnimationDirection, 'Out' | 'In'>;

const DefaultRollConfig: RollConfig = {...DefaultAnimationConfig, ...{direction: AnimationDirections.In, translate:'100%', degrees: 120, triggerName: 'roll'}};

interface RollConfig extends AnimationConfig{
  translate: string;
  direction: RollAnimationDirection;
  degrees: number
}

const rollAnimation = (direction: RollAnimationDirection): AnimationReferenceMetadata => animation( animate('{{timings}} {{delay}}', keyframes(rollKeyframes(direction)) ));

export const rollTransition = (animationConfig?: Partial<RollConfig>, animationOptions: AnimationOptions | null = null): TransitionConfig => {
  const configs: RollConfig = {...DefaultRollConfig, ...animationConfig};
  return {
    animationReferenceMetadata: rollAnimation(configs.direction),
    animationConfig,
    animationOptions: overwriteDefaultAnimationOptions({translate: configs.translate, degrees: configs.degrees}, animationOptions)
  }
}

export function roll(config?: Partial<RollConfig>): AnimationTriggerMetadata {
  const configs: RollConfig = {...DefaultRollConfig, ...config};
  return buildTrigger(
    {
      triggerName: (config && config.triggerName) || configs.triggerName,
      transitions: rollTransition(config)
    }
  )
}
