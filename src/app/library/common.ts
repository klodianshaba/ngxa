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

export const DefaultNestedAnimations: Extract<NestedAnimationsType ,'parallel'>  = 'parallel';

export const DefaultStateChangeExpression: Extract<StateChangeExpressionsType,'onEnter'>  = 'onEnter';

export const DefaultTimings: string = '700ms';

export let DefaultAnimationConfig: AnimationConfig = {triggerName:'animate', stateChangeExpression: StateChangeExpressions.onEnter, delay: 0 , timings: '300ms', nestedAnimations: 'parallel'}

// interfaces

export interface AnimationConfig{
  triggerName: string;
  stateChangeExpression: StateChangeExpressionsType | StateChangeExpressionsType[] | string | string[];
  delay: number;
  timings: string;
  nestedAnimations: NestedAnimationsType;
}



