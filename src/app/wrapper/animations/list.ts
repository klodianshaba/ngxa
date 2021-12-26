import {AnimationConfig, DefaultAnimationConfig} from "../common";
import {
  animate,
  animateChild,
  animation,
  AnimationReferenceMetadata, AnimationStyleMetadata,
  AnimationTriggerMetadata, group, keyframes,
  query,
  stagger, style
} from "@angular/animations";
import {buildTrigger} from "../base";


export function listAnimateChild(config?: Partial<AnimationConfig>): AnimationTriggerMetadata {
  return buildTrigger(
    {
      triggerName: (config && config.triggerName) || 'listAnimationChild',
      transitions: {
        animationReferenceMetadata: animation(
          query('@*', [
            style({opacity: 0 , offset: 0}),
            stagger((config && config.timings) || '200ms' ,
              group([
                animate(0,keyframes([style({opacity: 0 , offset: 0}),style({opacity: 1 , offset: 1})]) ),
                animateChild()
              ])
            )
            ] , {optional: true}
          )
        ),
        animationConfig: {...{triggerName: (config && config.triggerName) || 'listAnimationChild', stateChangeExpression: '* => *'},...config}
      }
    }
  )
}
