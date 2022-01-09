import {animate, animateChild, animation, AnimationTriggerMetadata, group, keyframes, query, stagger, style} from "@angular/animations";
import {AnimationConfig} from "../common";
import {buildTrigger} from "../base";

export function staggerNestedAnimations(config?: Partial<AnimationConfig>): AnimationTriggerMetadata {
  return buildTrigger(
    {
      triggerName: (config && config.triggerName) || 'staggerNestedAnimations',
      transitions: {
        animationReferenceMetadata: animation(group([
          query('@*', [
            style({opacity: 0 , offset: 0, visibility:'hidden'}),
            stagger((config && config.timings) || '200ms' ,
              group([
                animate(0,keyframes([style({visibility:'visible', offset: 0}),style({opacity: 1 , offset: 1})]) ),
                animateChild()
              ])
            )
            ] , {optional: true}
          )
          ])
        ),
        animationConfig: {...{triggerName: (config && config.triggerName) || 'staggerNestedAnimations', stateChangeExpressions: '* => *'},...config}
      }
    }
  )
}
