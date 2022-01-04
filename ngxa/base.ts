import {AnimationConfig, BuildTriggerConfig, DefaultAnimationConfig, NestedAnimations} from "./common";
import {
  animateChild,
  AnimationOptions,
  AnimationReferenceMetadata,
  AnimationTransitionMetadata,
  AnimationTriggerMetadata,
  group,
  query,
  transition,
  trigger,
  useAnimation,
  AnimationStateMetadata
} from "@angular/animations";

export function buildTrigger(config: BuildTriggerConfig): AnimationTriggerMetadata {
  if(config.transitions instanceof Array){
    return trigger(
      config.triggerName, [
        ...(config && config.states) ? includeStates(config.states) : [],
        ...config.transitions.map( transition => buildTransition(transition.animationReferenceMetadata,{...DefaultAnimationConfig,...transition.animationConfig},transition.animationOptions))
        ]
    );
  }else{
    return trigger(
      config.triggerName,
      [
        ...(config && config.states) ? includeStates(config.states) : [],
        buildTransition(config.transitions.animationReferenceMetadata,{...DefaultAnimationConfig, ...config.transitions.animationConfig },config.transitions.animationOptions)
      ]
    );
  }
}

export function buildTransition( animationReferenceMetadata: AnimationReferenceMetadata, config: AnimationConfig, options?: AnimationOptions | null): AnimationTransitionMetadata{
  return transition(
      includeStateChangeExpressions(config.stateChangeExpressions),
      includeNestedAnimations( animationReferenceMetadata, config),
      includeOptions(config, options)
  )
}

export function includeStates(states: AnimationStateMetadata | AnimationStateMetadata[] ): AnimationStateMetadata[] {
  if(states instanceof Array){
    return states;
  }else{
    return [states];
  }
}

export function includeOptions(config: AnimationConfig, options?: AnimationOptions | null): AnimationOptions | null{
  return  {delay:options?.delay , params: {...options?.params, ...config} }
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
