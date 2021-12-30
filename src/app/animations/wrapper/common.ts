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
  In = 'In',
  Out = 'Out',
  Left = 'Left',
  Right = 'Right',
  Up = 'Up',
  Down = 'Down',
}

export enum FlipAnimationDirections{
  X = 'X',
  Y = 'Y',
}

export enum FadeAnimationDirections{
  TopLeft = 'TopLeft',
  TopRight = 'TopRight',
  BottomRight = 'BottomRight',
  BottomLeft = 'BottomLeft',
}

export enum RotateAnimationDirections{
  DownLeft = 'DownLeft',
  DownRight = 'DownRight',
  UpLeft = 'UpLeft',
  UpRight = 'UpRight',
}
// types

export type RotateAnimationDirection = keyof typeof RotateAnimationDirections | Extract<AnimationDirection, 'In' | 'Out'>;

export type FadeAnimationDirection = keyof typeof FadeAnimationDirections | AnimationDirection;

export type FlipAnimationDirection = keyof typeof FlipAnimationDirections;

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

export function directionTranslate3d(translate: string, direction?: AnimationDirection): string{
  switch (direction){
    case AnimationDirections.Left:
      return 'translate3d('+ translate +',0 ,0)';
    case AnimationDirections.Right:
      return 'translate3d('+ translate +' ,0 ,0)';
    case AnimationDirections.Up:
      return 'translate3d(0,'+ translate +', 0)';
    case AnimationDirections.Down:
      return 'translate3d(0,'+ translate +', 0)';
    default:
      return 'translate3d('+ translate +',0 ,0)';
  }
}

// functions

export function isLeftOrDownDirection(direction: AnimationDirection): boolean {
  return [AnimationDirections.Left.toString(), AnimationDirections.Down.toString()].includes(direction);
}

export function isRightOrUpDirection(direction: AnimationDirection): boolean {
  return [AnimationDirections.Right.toString(), AnimationDirections.Up.toString()].includes(direction);
}

export function isRightOrDownDirection(direction: AnimationDirection): boolean {
  return [AnimationDirections.Right.toString(), AnimationDirections.Down.toString()].includes(direction);
}

export function isLeftOrUpDirection(direction: AnimationDirection): boolean {
  return [AnimationDirections.Left.toString(), AnimationDirections.Up.toString()].includes(direction);
}

export function isXDirection(direction: AnimationDirection): boolean {
  return [AnimationDirections.Left.toString(), AnimationDirections.Right.toString()].includes(direction);
}

export function isYDirection(direction: AnimationDirection): boolean {
  return [AnimationDirections.Down.toString(), AnimationDirections.Up.toString()].includes(direction);
}
