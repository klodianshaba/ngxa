import {AnimationTriggerMetadata} from "@angular/animations";
import {AnimationConfig} from "../../../ngxa/common";
import {buildTrigger} from "../../../ngxa/base";
import {
  backInTransition, backOutTransition, bounceInTransition, bounceOutTransition, bounceTransition,
  fadeInTransition, fadeOutTransition, flashTransition, flipInTransition, flipOutTransition, flipTransition,
  headShakeTransition, heartBeatTransition, hingeTransition, jackInTheBoxTransition, jelloTransition,
  lightspeedInTransition, lightspeedOutTransition, pulseTransition, rollTransition, rotateInTransition, rotateOutTransition,
  rubberBandTransition, shakeTransition, slideInTransition, slideOutTransition, swingTransition, tadaTransition,
  wobbleTransition, zoomInTransition, zoomOutTransition
} from "../../../ngxa";

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

        //flip
        flipTransition({stateChangeExpressions:'* => flip'}),
        flipInTransition({stateChangeExpressions:'* => flipInX', direction:'X'}),
        flipInTransition({stateChangeExpressions:'* => flipInY', direction:'Y'}),
        flipOutTransition({stateChangeExpressions:'* => flipOutX', direction:'X' }),
        flipOutTransition({stateChangeExpressions:'* => flipOutY', direction:'Y' }),
      ]
    }
  );
}
