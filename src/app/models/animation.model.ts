import {AnimationTriggerMetadata, AnimationOptions} from "@angular/animations";
import {buildTrigger ,AnimationConfig} from "../animations/wrapper";
import {bounceInTransition} from "../animations/bouncing-entrances";
import {zoomInTransition} from "../animations/zooming-entrances";
import {
  bounceTransition, flashTransition, headShakeTransition, heartBeatTransition, jelloTransition, swingTransition,
  wobbleTransition, pulseTransition, rubberBandTransition, shakeTransition,tadaTransition
}
from "../animations/attention-seekers";
import {backOutTransition} from "../animations/back-exits";
import {backInTransition} from "../animations/back-entrances";
import {bounceOutTransition} from "../animations/bouncing-exits/bounceOut";
import {zoomOutTransition} from "../animations/zoomings-exits";
import {rotateInTransition} from "../animations/rotating-entrances";
import {rotateOutTransition} from "../animations/rotating-exits";
import {slideInTransition} from "../animations/sliding-entrances";
import {slideOutTransition} from "../animations/sliding-exits";
import {lightspeedInTransition} from "../animations/lightspeed/lightspeedIn";
import {lightspeedOutTransition} from "../animations/lightspeed";

export interface AnimationModel{
  triggerName:string,
  value: string | number | boolean,
  params: AnimationOptions | null,
  canAnimate: boolean,
  active: boolean
}
export interface AnimationGroupModel{
  id: number;
  name: string;
  animations: AnimationModel[]
}

export const AnimationGroups: AnimationGroupModel[] = [
  {
    id:1, name: 'Attention seekers',
    animations: [
      {triggerName:'bounce', value: 'bounce' ,params:{}, canAnimate: false,active: false},
      {triggerName:'flash', value: 'flash' ,params:{}, canAnimate: false,active: false},
      {triggerName:'pulse', value: 'pulse' ,params:{}, canAnimate: false,active: false},
      {triggerName:'rubberBand', value: 'rubberBand' ,params:{}, canAnimate: false,active: false},
      {triggerName:'shake', value: 'shake' ,params:{}, canAnimate: false,active: false},
      {triggerName:'headShake', value: 'headShake' ,params:{}, canAnimate: false,active: false},
      {triggerName:'swing', value: 'swing' ,params:{}, canAnimate: false,active: false},
      {triggerName:'tada', value: 'tada' ,params:{}, canAnimate: false,active: false},
      {triggerName:'wobble', value: 'wobble' ,params:{}, canAnimate: false,active: false},
      {triggerName:'jello', value: 'jello' ,params:{}, canAnimate: false,active: false},
      {triggerName:'heartBeat', value: 'heartBeat' ,params:{}, canAnimate: false,active: false},
    ]
  },
  { id:2, name: 'Back entrances', animations: [
      {triggerName:'backInDown', value: 'backInDown' ,params:{}, canAnimate: false,active: false},
      {triggerName:'backInLeft', value: 'backInLeft' ,params:{}, canAnimate: false,active: false},
      {triggerName:'backInRight', value: 'backInRight' ,params:{}, canAnimate: false,active: false},
      {triggerName:'backInUp', value: 'backInUp' ,params:{}, canAnimate: false,active: false},
    ]
  },
  { id:3, name: 'Back exits', animations: [
      {triggerName:'backOutUp', value: 'backOutUp' ,params:{}, canAnimate: false,active: false},
      {triggerName:'backOutDown', value: 'backOutDown' ,params:{}, canAnimate: false,active: false},
      {triggerName:'backOutLeft', value: 'backOutLeft' ,params:{}, canAnimate: false,active: false},
      {triggerName:'backOutRight', value: 'backOutRight' ,params:{}, canAnimate: false,active: false},
    ] },
  {
    id:4, name: 'Bouncing entrances',
    animations: [
      {triggerName:'bounceIn', value: 'bounceIn' ,params:{}, canAnimate: false,active: false},
      {triggerName:'bounceInUp', value: 'bounceInUp' ,params:{}, canAnimate: false,active: false},
      {triggerName:'bounceInDown', value: 'bounceInDown' ,params:{}, canAnimate: false,active: false},
      {triggerName:'bounceInLeft', value: 'bounceInRight' ,params:{}, canAnimate: false,active: false},
      {triggerName:'bounceInRight', value: 'bounceInRight' ,params:{}, canAnimate: false,active: false},
    ]
  },
  { id:5, name: 'Bouncing exits',
    animations: [
      {triggerName:'bounceOut', value: 'bounceOut' ,params:{}, canAnimate: false,active: false},
      {triggerName:'bounceOutUp', value: 'bounceOutUp' ,params:{}, canAnimate: false,active: false},
      {triggerName:'bounceOutDown', value: 'bounceOutDown' ,params:{}, canAnimate: false,active: false},
      {triggerName:'bounceOutLeft', value: 'bounceOutLeft' ,params:{}, canAnimate: false,active: false},
      {triggerName:'bounceOutRight', value: 'bounceOutRight' ,params:{}, canAnimate: false,active: false},
    ]
  },
  { id:6, name: 'Fading entrances', animations: [] },
  { id:7, name: 'Fading exits', animations: [] },
  { id:8, name: 'Flippers', animations: [] },
  { id:9, name: 'Lightspeed',
    animations: [
      {triggerName:'lightspeedInLeft', value: 'lightspeedInLeft' ,params:{}, canAnimate: false,active: false},
      {triggerName:'lightspeedInRight', value: 'lightspeedInRight' ,params:{}, canAnimate: false,active: false},
      {triggerName:'lightspeedOutLeft', value: 'lightspeedOutLeft' ,params:{}, canAnimate: false,active: false},
      {triggerName:'lightspeedOutRight', value: 'lightspeedOutRight' ,params:{}, canAnimate: false,active: false},
    ]
  },
  { id:10, name: 'Rotating entrances',
    animations: [
      {triggerName:'rotateIn', value: 'rotateIn' ,params:{}, canAnimate: false,active: false},
      {triggerName:'rotateInDownLeft', value: 'rotateInDownLeft' ,params:{}, canAnimate: false,active: false},
      {triggerName:'rotateInDownRight', value: 'rotateInDownRight' ,params:{}, canAnimate: false,active: false},
      {triggerName:'rotateInUpLeft', value: 'rotateInUpLeft' ,params:{}, canAnimate: false,active: false},
      {triggerName:'rotateInUpRight', value: 'rotateInUpRight' ,params:{}, canAnimate: false,active: false},
    ]
  },
  { id:11, name: 'Rotating exits',
    animations: [
      {triggerName:'rotateOut', value: 'rotateIn' ,params:{}, canAnimate: false,active: false},
      {triggerName:'rotateOutDownLeft', value: 'rotateOutDownLeft' ,params:{}, canAnimate: false,active: false},
      {triggerName:'rotateOutDownRight', value: 'rotateOutDownRight' ,params:{}, canAnimate: false,active: false},
      {triggerName:'rotateOutUpLeft', value: 'rotateOutUpLeft' ,params:{}, canAnimate: false,active: false},
      {triggerName:'rotateOutUpRight', value: 'rotateOutUpRight' ,params:{}, canAnimate: false,active: false},
    ]
  },
  { id:12, name: 'Specials', animations: [] },
  {
    id:13, name: 'Zooming entrances',
    animations: [
      {triggerName:'zoomIn', value: 'zoomIn' ,params:{}, canAnimate: false, active: false},
      {triggerName:'zoomInUp', value: 'zoomInUp' ,params:{}, canAnimate: false, active: false},
      {triggerName:'zoomInDown', value: 'zoomInDown' ,params:{}, canAnimate: false, active: false},
      {triggerName:'zoomInLeft', value: 'zoomInDown' ,params:{}, canAnimate: false, active: false},
      {triggerName:'zoomInRight', value: 'zoomInDown' ,params:{}, canAnimate: false, active: false},
    ]
  },
  { id:14, name: 'Zooming exits',
    animations: [
      {triggerName:'zoomOut', value: 'zoomOut' ,params:{}, canAnimate: false, active: false},
      {triggerName:'zoomOutUp', value: 'zoomOutUp' ,params:{}, canAnimate: false, active: false},
      {triggerName:'zoomOutDown', value: 'zoomOutDown' ,params:{}, canAnimate: false, active: false},
      {triggerName:'zoomOutLeft', value: 'zoomOutLeft' ,params:{}, canAnimate: false, active: false},
      {triggerName:'zoomOutRight', value: 'zoomOutRight' ,params:{}, canAnimate: false, active: false},
    ]
  },
  { id:15, name: 'Sliding entrances',
    animations: [
      {triggerName:'slideInDown', value: 'slideInDown' ,params:{}, canAnimate: false,active: false},
      {triggerName:'slideInLeft', value: 'slideInLeft' ,params:{}, canAnimate: false,active: false},
      {triggerName:'slideInRight', value: 'slideInRight' ,params:{}, canAnimate: false,active: false},
      {triggerName:'slideInUp', value: 'slideInUp' ,params:{}, canAnimate: false,active: false},
    ]
  },
  { id:16, name: 'Sliding exits',
    animations: [
      {triggerName:'slideOutDown', value: 'slideOutDown' ,params:{}, canAnimate: false,active: false},
      {triggerName:'slideOutLeft', value: 'slideOutLeft' ,params:{}, canAnimate: false,active: false},
      {triggerName:'slideOutRight', value: 'slideOutRight' ,params:{}, canAnimate: false,active: false},
      {triggerName:'slideOutUp', value: 'slideOutUp' ,params:{}, canAnimate: false,active: false},
    ]
  },
]

export function animations(config?: Partial<AnimationConfig>): AnimationTriggerMetadata{
  return buildTrigger(
    {
      triggerName: (config && config.triggerName) || 'animations',
      transitions: [
        swingTransition({...config, ...{stateChangeExpressions:'* => swing'}}),
        bounceTransition({...config, ...{stateChangeExpressions:'* => bounce'}}),
        flashTransition({...config, ...{stateChangeExpressions:'* => flash'}}),
        headShakeTransition({...config, ...{stateChangeExpressions:'* => headShake'}}),
        heartBeatTransition({...config, ...{stateChangeExpressions:'* => heartBeat'}}),
        jelloTransition({...config, ...{stateChangeExpressions:'* => jello'}}),
        pulseTransition({...config, ...{stateChangeExpressions:'* => pulse'}}),
        rubberBandTransition({...config, ...{stateChangeExpressions:'* => rubberBand'}}),
        shakeTransition({...config, ...{stateChangeExpressions:'* => shake'}}),
        tadaTransition({...config, ...{stateChangeExpressions:'* => tada'}}),
        wobbleTransition({...config, ...{stateChangeExpressions:'* => wobble'}}),

        // bounce in transition with different directions
        bounceInTransition({...config, ...{stateChangeExpressions:'* => bounceIn'}}),
        bounceInTransition({...config, ...{stateChangeExpressions:'* => bounceInUp', direction: 'Up',translate:'500px'}}),
        bounceInTransition({...config, ...{stateChangeExpressions:'* => bounceInDown', direction: 'Down',translate:'500px'}}),
        bounceInTransition({...config, ...{stateChangeExpressions:'* => bounceInLeft', direction: 'Left',translate:'500px'}}),
        bounceInTransition({...config, ...{stateChangeExpressions:'* => bounceInRight', direction: 'Right',translate:'500px'}}),

        // bounce out transition with different directions
        bounceOutTransition({...config, ...{stateChangeExpressions:'* => bounceOut'}}),
        bounceOutTransition({...config, ...{stateChangeExpressions:'* => bounceOutUp', direction:'Up',translate:'500px'}}),
        bounceOutTransition({...config, ...{stateChangeExpressions:'* => bounceOutDown', direction:'Down',translate:'500px'}}),
        bounceOutTransition({...config, ...{stateChangeExpressions:'* => bounceOutLeft', direction:'Left',translate:'500px'}}),
        bounceOutTransition({...config, ...{stateChangeExpressions:'* => bounceOutRight', direction:'Right',translate:'500px'}}),

        // back out transition with different directions
        backOutTransition({...config, ...{stateChangeExpressions:'* => backOutUp',direction: 'Up',translate:'500px'}}),
        backOutTransition({...config, ...{stateChangeExpressions:'* => backOutDown',direction: 'Down',translate:'500px'}}),
        backOutTransition({...config, ...{stateChangeExpressions:'* => backOutLeft',direction: 'Left',translate:'500px'}}),
        backOutTransition({...config, ...{stateChangeExpressions:'* => backOutRight',direction: 'Right',translate:'500px'}}),

       // back in transition with different directions
        backInTransition({...config, ...{stateChangeExpressions:'* => backInUp', direction: 'Up',translate:'500px'}}),
        backInTransition({...config, ...{stateChangeExpressions:'* => backInDown', direction: 'Down',translate:'500px'}}),
        backInTransition({...config, ...{stateChangeExpressions:'* => backInRight', direction: 'Right',translate:'500px'}}),
        backInTransition({...config, ...{stateChangeExpressions:'* => backInLeft', direction: 'Left',translate:'500px'}}),

        // zoom in transition with different directions
        zoomInTransition({...config, ...{stateChangeExpressions:'* => zoomIn',timings:'1s'}}),
        zoomInTransition({...config, ...{stateChangeExpressions:'* => zoomInUp', direction: 'Up',timings:'1s'}}),
        zoomInTransition({...config, ...{stateChangeExpressions:'* => zoomInDown', direction: 'Down',timings:'1s'}}),
        zoomInTransition({...config, ...{stateChangeExpressions:'* => zoomInLeft', direction: 'Left',timings:'1s'}}),
        zoomInTransition({...config, ...{stateChangeExpressions:'* => zoomInRight', direction: 'Right',timings:'1s'}}),

        // zoom in transition with different directions
        zoomOutTransition({...config, ...{stateChangeExpressions:'* => zoomOut',timings:'1s'}}),
        zoomOutTransition({...config, ...{stateChangeExpressions:'* => zoomOutUp', direction: 'Up', timings:'1s',translate: '800px'}}),
        zoomOutTransition({...config, ...{stateChangeExpressions:'* => zoomOutDown', direction: 'Down', timings:'1s', translate: '800px'}}),
        zoomOutTransition({...config, ...{stateChangeExpressions:'* => zoomOutLeft', direction: 'Left', timings:'1s',translate: '800px'}}),
        zoomOutTransition({...config, ...{stateChangeExpressions:'* => zoomOutRight', direction: 'Right', timings:'1s',translate: '800px'}}),

        // rotate in transition with different directions
        rotateInTransition({...config, ...{stateChangeExpressions:'* => rotateIn',timings:'0.5s'}}),
        rotateInTransition({...config, ...{stateChangeExpressions:'* => rotateInDownLeft',timings:'0.5s', direction:'DownLeft'}}),
        rotateInTransition({...config, ...{stateChangeExpressions:'* => rotateInDownRight',timings:'0.5s', direction:'DownRight'}}),
        rotateInTransition({...config, ...{stateChangeExpressions:'* => rotateInUpLeft',timings:'0.5s', direction:'UpLeft'}}),
        rotateInTransition({...config, ...{stateChangeExpressions:'* => rotateInUpRight',timings:'0.5s', direction:'UpRight'}}),

        // rotate in transition with different directions
        rotateOutTransition({...config, ...{stateChangeExpressions:'* => rotateOut',timings:'0.5s'}}),
        rotateOutTransition({...config, ...{stateChangeExpressions:'* => rotateOutDownLeft',timings:'0.5s', direction:'DownLeft'}}),
        rotateOutTransition({...config, ...{stateChangeExpressions:'* => rotateOutDownRight',timings:'0.5s', direction:'DownRight'}}),
        rotateOutTransition({...config, ...{stateChangeExpressions:'* => rotateOutUpLeft',timings:'0.5s', direction:'UpLeft'}}),
        rotateOutTransition({...config, ...{stateChangeExpressions:'* => rotateOutUpRight',timings:'0.5s', direction:'UpRight'}}),

        // slide in transition with different directions
        slideInTransition({...config, ...{stateChangeExpressions:'* => slideInUp', direction: 'Up'}}),
        slideInTransition({...config, ...{stateChangeExpressions:'* => slideInDown', direction: 'Down'}}),
        slideInTransition({...config, ...{stateChangeExpressions:'* => slideInRight', direction: 'Right'}}),
        slideInTransition({...config, ...{stateChangeExpressions:'* => slideInLeft', direction: 'Left'}}),

        // slide out transition with different directions
        slideOutTransition({...config, ...{stateChangeExpressions:'* => slideOutUp', direction: 'Up'}}),
        slideOutTransition({...config, ...{stateChangeExpressions:'* => slideOutDown', direction: 'Down'}}),
        slideOutTransition({...config, ...{stateChangeExpressions:'* => slideOutRight', direction: 'Right'}}),
        slideOutTransition({...config, ...{stateChangeExpressions:'* => slideOutLeft', direction: 'Left'}}),

        // lightspeed In transition with left right directions
        lightspeedInTransition({...config, ...{stateChangeExpressions:'* => lightspeedInLeft', direction: 'Left'}}),
        lightspeedInTransition({...config, ...{stateChangeExpressions:'* => lightspeedInRight', direction: 'Right'}}),

        // lightspeed Out transition with left right directions
        lightspeedOutTransition({...config, ...{stateChangeExpressions:'* => lightspeedOutLeft', direction: 'Left'}}),
        lightspeedOutTransition({...config, ...{stateChangeExpressions:'* => lightspeedOutRight', direction: 'Right'}}),
      ]
    }
  );
}
