// enums

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

// types

export type StateChangeExpressionsType = keyof typeof StateChangeExpressions;

export type NestedAnimationsType = keyof typeof NestedAnimations;

// constants

export let DefaultAnimationConfig: AnimationConfig = {triggerName:'animation', stateChangeExpressions: StateChangeExpressions.onEnter, delay: '0ms' , timings: '300ms', nestedAnimations: NestedAnimations.parallel}

// interfaces

export interface AnimationConfig{
  triggerName: string;
  stateChangeExpressions: string | string[];
  delay: string;
  timings: string | number;
  nestedAnimations: NestedAnimationsType;
}



