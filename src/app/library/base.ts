import {AnimationConfig, DefaultAnimationConfig, NestedAnimations} from "./common";
import {
  animate,
  animateChild,
  animation,
  AnimationAnimateMetadata,
  AnimationOptions,
  AnimationReferenceMetadata,
  AnimationTransitionMetadata,
  AnimationTriggerMetadata,
  group,
  keyframes,
  query,
  transition,
  trigger,
  useAnimation
} from "@angular/animations";
import {zoomInKeyframes} from "./zoomIn";

export function buildTrigger(animationReferenceMetadata: AnimationReferenceMetadata ,config: Partial<AnimationConfig> = DefaultAnimationConfig, options?: AnimationOptions | null): AnimationTriggerMetadata {
  let configs: AnimationConfig = {...DefaultAnimationConfig, ...config };
  return trigger(configs.triggerName, buildTransitions(animationReferenceMetadata,configs,options));
}

export function buildTransitions( animationReferenceMetadata: AnimationReferenceMetadata, config: AnimationConfig, options?: AnimationOptions | null): AnimationTransitionMetadata[]{
  return [
    transition(
      includeStateChangeExpressions(config.stateChangeExpressions),
      includeNestedAnimations( animationReferenceMetadata, config),
      includeOptions(config, options)
      )
  ]
}

export function includeOptions(config: AnimationConfig, options?: AnimationOptions | null): AnimationOptions | null{
  return  {delay:options?.delay , params: {...{delay: config.delay, timings: config.timings}, ...options?.params } }
}

export function includeStateChangeExpressions(stateChangeExpressions: AnimationConfig['stateChangeExpressions']): string{
   return (stateChangeExpressions instanceof Array) ? stateChangeExpressions.join() : stateChangeExpressions;
}

export function includeNestedAnimations(animation: AnimationReferenceMetadata, config?: Partial<AnimationConfig>) {
  return [
    ...(config && config.nestedAnimations === NestedAnimations.before ? [query('@*', animateChild(), { optional: true })] : []),
    group([ useAnimation(animation),
        ...(!config || !config.nestedAnimations || config.nestedAnimations === NestedAnimations.parallel ? [query('@*', animateChild(), { optional: true })] : [] )
      ]
    ),
    ...(config && config.nestedAnimations === NestedAnimations.after ? [query('@*', animateChild(), { optional: true })] : [])
  ];
}
