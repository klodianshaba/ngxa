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
import {hingeTransition} from "../animations/specials/hinge";
import {jackInTheBoxTransition} from "../animations/specials/jackInTheBox";
import {rollTransition} from "../animations/specials/roll";
import {fadeInTransition} from "../animations/fading-entrances/fadeIn";
import {fadeOutTransition} from "../animations/fading-entrances/fadeOut";

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
  { id:6, name: 'Fading entrances',
    animations: [
      {triggerName:'fadeIn', value: 'fadeIn' ,params:{}, canAnimate: false,active: false},
      {triggerName:'fadeInLeft', value: 'fadeInLeft' ,params:{}, canAnimate: false,active: false},
      {triggerName:'fadeInRight', value: 'fadeInRight' ,params:{}, canAnimate: false,active: false},
      {triggerName:'fadeInDown', value: 'fadeInDown' ,params:{}, canAnimate: false,active: false},
      {triggerName:'fadeInUp', value: 'fadeInUp' ,params:{}, canAnimate: false,active: false},
      {triggerName:'fadeInTopLeft', value: 'fadeInTopLeft' ,params:{}, canAnimate: false,active: false},
      {triggerName:'fadeInTopRight', value: 'fadeInTopRight' ,params:{}, canAnimate: false,active: false},
      {triggerName:'fadeInBottomLeft', value: 'fadeInBottomLeft' ,params:{}, canAnimate: false,active: false},
      {triggerName:'fadeInBottomRight', value: 'fadeInBottomRight' ,params:{}, canAnimate: false,active: false},
    ]
  },
  { id:7, name: 'Fading exits',
    animations: [
      {triggerName:'fadeOut', value: 'fadeOut' ,params:{}, canAnimate: false,active: false},
      {triggerName:'fadeOutLeft', value: 'fadeOutLeft' ,params:{}, canAnimate: false,active: false},
      {triggerName:'fadeOutRight', value: 'fadeOutRight' ,params:{}, canAnimate: false,active: false},
      {triggerName:'fadeOutDown', value: 'fadeOutDown' ,params:{}, canAnimate: false,active: false},
      {triggerName:'fadeOutUp', value: 'fadeOutUp' ,params:{}, canAnimate: false,active: false},
      {triggerName:'fadeOutTopLeft', value: 'fadeOutTopLeft' ,params:{}, canAnimate: false,active: false},
      {triggerName:'fadeOutTopRight', value: 'fadeOutTopRight' ,params:{}, canAnimate: false,active: false},
      {triggerName:'fadeOutBottomLeft', value: 'fadeOutBottomLeft' ,params:{}, canAnimate: false,active: false},
      {triggerName:'fadeOutBottomRight', value: 'fadeOutBottomRight' ,params:{}, canAnimate: false,active: false},
    ]
  },
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
  { id:12, name: 'Specials',
    animations: [
      {triggerName:'hinge', value: 'hinge' ,params:{}, canAnimate: false,active: false},
      {triggerName:'jackInTheBox', value: 'jackInTheBox' ,params:{}, canAnimate: false,active: false},
      {triggerName:'rollIn', value: 'rollIn' ,params:{}, canAnimate: false,active: false},
      {triggerName:'rollOut', value: 'rollOut' ,params:{}, canAnimate: false,active: false},
    ]
  },
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
        swingTransition({stateChangeExpressions:'* => swing'}),
        bounceTransition({stateChangeExpressions:'* => bounce'}),
        flashTransition({stateChangeExpressions:'* => flash'}),
        headShakeTransition({stateChangeExpressions:'* => headShake'}),
        heartBeatTransition({stateChangeExpressions:'* => heartBeat'}),
        jelloTransition({stateChangeExpressions:'* => jello'}),
        pulseTransition({stateChangeExpressions:'* => pulse'}),
        rubberBandTransition({stateChangeExpressions:'* => rubberBand'}),
        shakeTransition({stateChangeExpressions:'* => shake'}),
        tadaTransition({stateChangeExpressions:'* => tada'}),
        wobbleTransition({stateChangeExpressions:'* => wobble'}),

        // bounce in transition with different directions
        bounceInTransition({stateChangeExpressions:'* => bounceIn'}),
        bounceInTransition({stateChangeExpressions:'* => bounceInUp', direction: 'Up',translate:'500px'}),
        bounceInTransition({stateChangeExpressions:'* => bounceInDown', direction: 'Down',translate:'500px'}),
        bounceInTransition({stateChangeExpressions:'* => bounceInLeft', direction: 'Left',translate:'500px'}),
        bounceInTransition({stateChangeExpressions:'* => bounceInRight', direction: 'Right',translate:'500px'}),

        // bounce out transition with different directions
        bounceOutTransition({stateChangeExpressions:'* => bounceOut'}),
        bounceOutTransition({stateChangeExpressions:'* => bounceOutUp', direction:'Up',translate:'500px'}),
        bounceOutTransition({stateChangeExpressions:'* => bounceOutDown', direction:'Down',translate:'500px'}),
        bounceOutTransition({stateChangeExpressions:'* => bounceOutLeft', direction:'Left',translate:'500px'}),
        bounceOutTransition({stateChangeExpressions:'* => bounceOutRight', direction:'Right',translate:'500px'}),

        // back out transition with different directions
        backOutTransition({stateChangeExpressions:'* => backOutUp',direction: 'Up',translate:'500px'}),
        backOutTransition({stateChangeExpressions:'* => backOutDown',direction: 'Down',translate:'500px'}),
        backOutTransition({stateChangeExpressions:'* => backOutLeft',direction: 'Left',translate:'500px'}),
        backOutTransition({stateChangeExpressions:'* => backOutRight',direction: 'Right',translate:'500px'}),

       // back in transition with different directions
        backInTransition({stateChangeExpressions:'* => backInUp', direction: 'Up',translate:'500px'}),
        backInTransition({stateChangeExpressions:'* => backInDown', direction: 'Down',translate:'500px'}),
        backInTransition({stateChangeExpressions:'* => backInRight', direction: 'Right',translate:'500px'}),
        backInTransition({stateChangeExpressions:'* => backInLeft', direction: 'Left',translate:'500px'}),

        // zoom in transition with different directions
        zoomInTransition({stateChangeExpressions:'* => zoomIn',timings:'1s'}),
        zoomInTransition({stateChangeExpressions:'* => zoomInUp', direction: 'Up',timings:'1s'}),
        zoomInTransition({stateChangeExpressions:'* => zoomInDown', direction: 'Down',timings:'1s'}),
        zoomInTransition({stateChangeExpressions:'* => zoomInLeft', direction: 'Left',timings:'1s'}),
        zoomInTransition({stateChangeExpressions:'* => zoomInRight', direction: 'Right',timings:'1s'}),

        // zoom in transition with different directions
        zoomOutTransition({stateChangeExpressions:'* => zoomOut',timings:'1s'}),
        zoomOutTransition({stateChangeExpressions:'* => zoomOutUp', direction: 'Up', timings:'1s',translate: '800px'}),
        zoomOutTransition({stateChangeExpressions:'* => zoomOutDown', direction: 'Down', timings:'1s', translate: '800px'}),
        zoomOutTransition({stateChangeExpressions:'* => zoomOutLeft', direction: 'Left', timings:'1s',translate: '800px'}),
        zoomOutTransition({stateChangeExpressions:'* => zoomOutRight', direction: 'Right', timings:'1s',translate: '800px'}),

        // rotate in transition with different directions
        rotateInTransition({stateChangeExpressions:'* => rotateIn',timings:'0.5s'}),
        rotateInTransition({stateChangeExpressions:'* => rotateInDownLeft',timings:'0.5s', direction:'DownLeft'}),
        rotateInTransition({stateChangeExpressions:'* => rotateInDownRight',timings:'0.5s', direction:'DownRight'}),
        rotateInTransition({stateChangeExpressions:'* => rotateInUpLeft',timings:'0.5s', direction:'UpLeft'}),
        rotateInTransition({stateChangeExpressions:'* => rotateInUpRight',timings:'0.5s', direction:'UpRight'}),

        // rotate in transition with different directions
        rotateOutTransition({stateChangeExpressions:'* => rotateOut',timings:'0.5s'}),
        rotateOutTransition({stateChangeExpressions:'* => rotateOutDownLeft',timings:'0.5s', direction:'DownLeft'}),
        rotateOutTransition({stateChangeExpressions:'* => rotateOutDownRight',timings:'0.5s', direction:'DownRight'}),
        rotateOutTransition({stateChangeExpressions:'* => rotateOutUpLeft',timings:'0.5s', direction:'UpLeft'}),
        rotateOutTransition({stateChangeExpressions:'* => rotateOutUpRight',timings:'0.5s', direction:'UpRight'}),

        // slide in transition with different directions
        slideInTransition({stateChangeExpressions:'* => slideInUp', direction: 'Up'}),
        slideInTransition({stateChangeExpressions:'* => slideInDown', direction: 'Down'}),
        slideInTransition({stateChangeExpressions:'* => slideInRight', direction: 'Right'}),
        slideInTransition({stateChangeExpressions:'* => slideInLeft', direction: 'Left'}),

        // slide out transition with different directions
        slideOutTransition({stateChangeExpressions:'* => slideOutUp', direction: 'Up'}),
        slideOutTransition({stateChangeExpressions:'* => slideOutDown', direction: 'Down'}),
        slideOutTransition({stateChangeExpressions:'* => slideOutRight', direction: 'Right'}),
        slideOutTransition({stateChangeExpressions:'* => slideOutLeft', direction: 'Left'}),

        // lightspeed In transition with left right directions
        lightspeedInTransition({stateChangeExpressions:'* => lightspeedInLeft', direction: 'Left'}),
        lightspeedInTransition({stateChangeExpressions:'* => lightspeedInRight', direction: 'Right'}),

        // lightspeed Out transition with left right directions
        lightspeedOutTransition({stateChangeExpressions:'* => lightspeedOutLeft', direction: 'Left'}),
        lightspeedOutTransition({stateChangeExpressions:'* => lightspeedOutRight', direction: 'Right'}),

        //specials
        hingeTransition({stateChangeExpressions:'* => hinge', timings: '1s'}),
        jackInTheBoxTransition({stateChangeExpressions:'* => jackInTheBox', timings: '1s'}),
        rollTransition({stateChangeExpressions:'* => rollIn', direction: 'In',translate:'500px', degrees:320}),
        rollTransition({stateChangeExpressions:'* => rollOut', direction:'Out',translate:'500px', degrees:320}),

        // fade In transition with different directions
        fadeInTransition({stateChangeExpressions:'* => fadeIn'}),
        fadeInTransition({stateChangeExpressions:'* => fadeInLeft', direction:'Left'}),
        fadeInTransition({stateChangeExpressions:'* => fadeInRight', direction:'Right'}),
        fadeInTransition({stateChangeExpressions:'* => fadeInDown', direction:'Down'}),
        fadeInTransition({stateChangeExpressions:'* => fadeInUp', direction:'Up'}),
        fadeInTransition({stateChangeExpressions:'* => fadeInTopLeft', direction:'TopLeft'}),
        fadeInTransition({stateChangeExpressions:'* => fadeInTopRight', direction:'TopRight'}),
        fadeInTransition({stateChangeExpressions:'* => fadeInBottomLeft', direction:'BottomLeft'}),
        fadeInTransition({stateChangeExpressions:'* => fadeInBottomRight', direction:'BottomRight'}),

        // fade Out transition with different directions
        // fade In transition with different directions
        fadeOutTransition({stateChangeExpressions:'* => fadeOut'}),
        fadeOutTransition({stateChangeExpressions:'* => fadeOutLeft', direction:'Left'}),
        fadeOutTransition({stateChangeExpressions:'* => fadeOutRight', direction:'Right'}),
        fadeOutTransition({stateChangeExpressions:'* => fadeOutDown', direction:'Down'}),
        fadeOutTransition({stateChangeExpressions:'* => fadeOutUp', direction:'Up'}),
        fadeOutTransition({stateChangeExpressions:'* => fadeOutTopLeft', direction:'TopLeft'}),
        fadeOutTransition({stateChangeExpressions:'* => fadeOutTopRight', direction:'TopRight'}),
        fadeOutTransition({stateChangeExpressions:'* => fadeOutBottomLeft', direction:'BottomLeft'}),
        fadeOutTransition({stateChangeExpressions:'* => fadeOutBottomRight', direction:'BottomRight'}),
      ]
    }
  );
}
