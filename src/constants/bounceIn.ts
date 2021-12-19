import {animate, keyframes, style, transition, trigger} from "@angular/animations";

export const bounceInKeyframes = [
  style({ opacity: 0 , transform: 'scale3d(0.3, 0.3, 0.3)', offset: 0}),
  style({ transform: 'scale3d(1.1, 1.1, 1.1)', offset: .2}),
  style({transform: 'scale3d(0.9, 0.9, 0.9)', offset: .4}),
  style({ opacity: 1, transform: 'scale3d(1.03, 1.03, 1.03)', offset: .6}),
  style({ transform: 'scale3d(0.97, 0.97, 0.97)', offset: .8}),
  style({ transform: 'none', offset: 1} ),
];

export const  bounceIn = trigger('bounceIn', [
    transition('* => in', animate('{{timings}}', keyframes( bounceInKeyframes ))),
    transition(':enter', animate('{{timings}}', keyframes( bounceInKeyframes ))),
]);
