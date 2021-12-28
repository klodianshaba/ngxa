// enums

import {AnimationOptions, AnimationReferenceMetadata} from "@angular/animations";

export enum NestedAnimations{
  parallel = 'parallel',
  before = 'before',
  after = 'after',
  none = 'none'
}
export enum StateChangeExpressions{
  onEnter =  ':enter',
  onLeave = ':leave',
  onBoolean = '0 => 1',
}

export enum AnimationDirections {
  Left = 'Left',
  Right = 'Right',
  Up = 'Up',
  Down = 'Down',
}

// types
export type AnimationDirection = keyof typeof AnimationDirections;

export type StateChangeExpressionsType = keyof typeof StateChangeExpressions;

export type NestedAnimationsType = keyof typeof NestedAnimations;

// constants

export let DefaultAnimationConfig: AnimationConfig = {triggerName:'animation', stateChangeExpressions: StateChangeExpressions.onEnter, delay: '0ms' , timings: '500ms', nestedAnimations: NestedAnimations.parallel}

// interfaces

export interface AnimationConfig{
  triggerName: string;
  stateChangeExpressions: string | string[];
  delay: string;
  timings: string | number;
  nestedAnimations: NestedAnimationsType;
}

export interface TransitionConfig{
  animationReferenceMetadata: AnimationReferenceMetadata;
  animationConfig?: Partial<AnimationConfig>;
  animationOptions?: AnimationOptions | null;
}

export interface BuildTriggerConfig{
  triggerName: string;
  transitions: TransitionConfig | TransitionConfig[];
}



