import {animate, keyframes, style, AnimationTriggerMetadata, animation, AUTO_STYLE} from "@angular/animations";
import {buildTrigger} from "../../base";
import {AnimationConfig} from "../../common";

export const heartBeatKeyframes = [
  style({ opacity: 0, visibility: AUTO_STYLE, transform: 'scale(1)', easing: 'ease-in-out', offset: 0 }),
  style({ opacity: 1, transform: 'scale({{scale}})', easing: 'ease-in-out', offset: 0.14 }),
  style({ transform: 'scale(1)', easing: 'ease-in-out', offset: 0.28 }),
  style({ transform: 'scale({{scale}})', easing: 'ease-in-out', offset: 0.42 }),
  style({ transform: 'scale(1)', easing: 'ease-in-out', offset: 0.7 })
];

interface HeartBeatAnimationConfig extends AnimationConfig{
  scale: number;
}

export function heartBeat(config?: Partial<HeartBeatAnimationConfig>): AnimationTriggerMetadata {
  return buildTrigger(
    animation( animate('{{timings}} {{delay}}', keyframes(heartBeatKeyframes) )),
    {...{triggerName: 'heartBeat'},...config},
    {params: {scale: 1.3}}
  )
}
