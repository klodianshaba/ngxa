import {AnimationConfig, DefaultAnimationConfig, DefaultTimings, NestedAnimations} from "./common";
import {animate, animateChild, animation, AnimationAnimateMetadata, AnimationReferenceMetadata, AnimationTransitionMetadata, AnimationTriggerMetadata, group, keyframes, query, transition, trigger, useAnimation} from "@angular/animations";
import {zoomInKeyframes} from "./zoomIn";

export function buildTrigger(animationReferenceMetadata: AnimationReferenceMetadata ,config?: Partial<AnimationConfig>): AnimationTriggerMetadata {
  let configs: AnimationConfig = {...DefaultAnimationConfig, ...config };
  return trigger(configs.triggerName, buildTransitions(configs, animationReferenceMetadata));
}

export function buildTransitions(config: AnimationConfig, animationReferenceMetadata: AnimationReferenceMetadata): AnimationTransitionMetadata[]{
  return [
    transition(config.stateChangeExpression.toString(),
      includeNestedAnimations( animationReferenceMetadata, config)
    )
  ]
}

function includeNestedAnimations(animation: AnimationReferenceMetadata, config?: Partial<AnimationConfig>) {
  return [
    ...(config && config.nestedAnimations === NestedAnimations.before ? [query('@*', animateChild(), { optional: true })] : []),
    group([ useAnimation(animation),
        ...(!config || !config.nestedAnimations || config.nestedAnimations === NestedAnimations.parallel ? [query('@*', animateChild(), { optional: true })] : [] )
      ]
    ),
    ...(config && config.nestedAnimations === NestedAnimations.after ? [query('@*', animateChild(), { optional: true })] : [])
  ];
}
