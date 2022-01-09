import {animate, keyframes, style, AnimationTriggerMetadata, animation, AnimationOptions, AnimationStyleMetadata, AnimationReferenceMetadata} from "@angular/animations";
import {DefaultAnimationConfig, AnimationConfig, TransitionConfig} from "../common";
import {buildTrigger} from "../base";

const jackInTheBoxKeyframes: AnimationStyleMetadata[] = [
  style({  opacity: 0, transform: 'scale(0.1) rotate(30deg)', 'transform-origin': 'center bottom', offset: 0 }),
  style({  opacity: 1, transform: 'rotate(-10deg)', offset: 0.5 }),
  style({  transform: 'rotate(3deg)', offset: 0.7 }),
  style({  opacity: 1, transform: 'scale(1)', offset: 1 })
];

const jackInTheBoxAnimation: AnimationReferenceMetadata = animation( animate('{{timings}} {{delay}}', keyframes(jackInTheBoxKeyframes) ));

export const jackInTheBoxTransition = (animationConfig?: Partial<AnimationConfig>, animationOptions: AnimationOptions | null = null): TransitionConfig => {
  return {
    animationReferenceMetadata: jackInTheBoxAnimation,
    animationConfig,
    animationOptions
  }
}

export function jackInTheBox(config?: Partial<AnimationConfig>): AnimationTriggerMetadata {
  const configs: AnimationConfig = {...DefaultAnimationConfig, ...config};
  return buildTrigger(
    {
      triggerName: (config && config.triggerName) || configs.triggerName,
      transitions: jackInTheBoxTransition(config)
    }
  )
}
