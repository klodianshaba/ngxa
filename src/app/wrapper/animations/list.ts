import {AnimationConfig, DefaultAnimationConfig} from "../common";
import {animateChild, animation, AnimationTriggerMetadata, query, stagger} from "@angular/animations";
import {buildTrigger} from "../base";

export function list(config?: Partial<AnimationConfig>): AnimationTriggerMetadata {
  return buildTrigger(
    animation(query('@*', stagger((config && config.timings) || '200ms' , animateChild()), {optional: true})),
    {...{triggerName: 'list', stateChangeExpression: '* => *'},...config}
  )
}
