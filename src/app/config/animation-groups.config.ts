import {AnimationGroupModel} from "../models";

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
  { id:8, name: 'Flippers',
    animations: [
      {triggerName:'flip', value: 'flip' ,params:{}, canAnimate: false,active: false},
      {triggerName:'flipInX', value: 'flipInX' ,params:{}, canAnimate: false,active: false},
      {triggerName:'flipInY', value: 'flipInY' ,params:{}, canAnimate: false,active: false},
      {triggerName:'flipOutX', value: 'flipOutX' ,params:{}, canAnimate: false,active: false},
      {triggerName:'flipOutY', value: 'flipOutY' ,params:{}, canAnimate: false,active: false},
    ]
  },
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
