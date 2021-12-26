import {AnimationTriggerMetadata} from "@angular/animations";
import {buildTrigger} from "../base";
import {AnimationConfig} from "../common";
import {bounceInTransition} from "./bounceIn";
import {zoomInAnimation, zoomInTransition} from "./zoomIn";
import {
  bounceTransition,
  flashTransition,
  headShakeTransition,
  heartBeatTransition, jelloTransition,
  swingTransition
} from "./attention-seekers";

export function animations(config?: Partial<AnimationConfig>): AnimationTriggerMetadata{
  return buildTrigger(
    {
      triggerName: (config && config.triggerName) || 'animations',
      transitions: [
        zoomInTransition({...config, ...{stateChangeExpressions:'* => zoomIn'}}),
        bounceInTransition({...config, ...{stateChangeExpressions:'* => bounceIn'}}),
        swingTransition({...config, ...{stateChangeExpressions:'* => swing'}}),
        bounceTransition({...config, ...{stateChangeExpressions:'* => bounce'}}),
        flashTransition({...config, ...{stateChangeExpressions:'* => flash'}}),
        headShakeTransition({...config, ...{stateChangeExpressions:'* => headShake'}}),
        heartBeatTransition({...config, ...{stateChangeExpressions:'* => heartBeat'}}),
        jelloTransition({...config, ...{stateChangeExpressions:'* => jello'}})
      ]
    }
  );
}
