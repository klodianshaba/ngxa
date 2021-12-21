import {animate, AnimationTriggerMetadata, keyframes, style, transition, trigger} from "@angular/animations";

export const zoomInKeyframes = [
  style({ visibility: 'visible', transform: 'translate3d(0, 200px, 0)', easing: 'ease', offset: 0 }),
  style({ transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 1 })
];

export function  zoomIn (): AnimationTriggerMetadata {

 return trigger('zoomIn', [

    transition(':enter', animate('{{timings}}', keyframes(zoomInKeyframes))),

  ]);
}

export function  zoomInClick (): AnimationTriggerMetadata {

  return trigger('zoomInClick', [

    transition('false => true', animate('300ms', keyframes(zoomInKeyframes))),

  ]);
}
