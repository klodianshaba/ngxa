# NGXA

This wrapper helps to implement animations easy in angular application\
Easy Builder, Dynamically, Reusable And Different Direction On Single Base Code\
Implements all animations based in [Animate.css](https://animate.style/) with the power of [Angular animations](https://angular.io/guide/animations)  

## Demo

Demo of animations is available at [https://klodianshaba.github.io/ngxa](https://klodianshaba.github.io/ngxa)

## Example 

Building animation trigger by using buildTrigger function from ngxa:

```Typescript
import {animate, animation, AnimationTriggerMetadata, keyframes, style} from "@angular/animations";
import {AnimationConfig} from "./ngxa/common";
import {buildTrigger} from "./ngxa/base";

const FadeKeyFrames: AnimationKeyframesSequenceMetadata = keyframes([
  style({opacity: 0, offset: 0}),
  style({opacity: 1, offset: 1}),
]);

const FadeAnimation: AnimationReferenceMetadata = animation( animate('{{timings}}', FadeKeyFrames));

export const fade = (animationConfig?: Partial<AnimationConfig>): AnimationTriggerMetadata => {
  return buildTrigger({
    triggerName: (animationConfig && animationConfig.triggerName) || 'fade',
    transitions: {
      animationReferenceMetadata: FadeAnimation,
      animationConfig,
      animationOptions: {params: {timings: '500ms'}}
    },
    states: []
  });
};
```

Now the trigger can be reused anywhere we want just by importing it and Including into animations property in component decorator.
The trigger function accept an optional configuration parameter to overwrite default AnimationConfig.  

```Typescript
import {fadeAnimation} from "./ngxa";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    // use fadeAnimation and overwrite optional configs
    fadeAnimation({timings:'0.3s', stateChangeExpressions: [':enter', '0 => 1'], triggerName: 'fadeAnimation'} ) 
  ]
})
```

Using Animation in component's Template 

```Html
<span [@fadeAnimation]="state">Fade Me</span>
```

Or with dynamic params

```Html
<span [@fadeAnimation]="{value:state,params:{timings:'0.3s'}}">Fade Me</span>
```

### Common configuration Interfaces

```Typescript
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
  states?: AnimationStateMetadata | AnimationStateMetadata[],
}
```

If needed to add specific configaration properties based on each style, we should create a new interface and extend AnimationConfig to include all necessary properties

```Typescript
import {AnimationConfig} from "./ngxa/common";

interface RotateInConfig extends AnimationConfig{
  degrees: number;
  direction: RotateInAnimationDirection;
}
```

## Utility functions based on Animate.css style

Each style offers two functions, building trigger and building transition

### Triggers

Can be used for single style with different configurations and direction

```Typescript
import {
bounce, flash, pulse, rubberBand, shake, headShake, swing, tada, wobble, jello, heartBeat,
backIn, backOut, bounceIn, bounceOut, fadeIn, fadeOut, flip, flipIn, flipOut,
lightspeedIn, lightspeedOut, rotateIn, rotateOut, hinge, jackInTheBox, roll, zoomIn, zoomOut, slideIn, slideOut
} from "./ngxa";
```

Let's take on consideration reusing zoomIn function on multiple directions such as: zoomInUp, zoomInDown, zoomInLeft, zoomInRight

```Typescript
import {zoomIn} from "./ngxa";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations:[
    zoomIn(),
    zoomIn({direction: 'Up', stateChangeExpressions: ':enter, 0 => 1', translate: '200px'}), 
    zoomIn({direction: 'Down', stateChangeExpressions: [':enter','out => in'], translate: '500px'}),
    zoomIn({direction: 'Left', translate: '300px', nestedAnimations:'parallel'}),
    zoomIn({direction: 'Right', timings:'1s', triggerName:'customZoomInRight'}),
  ]
})
```

```Html
<div [@zoomIn]>
  <span>ZoomIn Me</span>
</div>
<div [@zoomInUp]>
  <span>ZoomInUp Me</span>
</div>
<div [@zoomInDown]>
  <span>ZoomInDown Me</span>
</div>
<div [@zoomInLeft]>
  <span>ZoomInLeft Me</span>
</div>
<div [@customZoomInRight]>
  <span>ZoomInRight Me</span>
</div>
```

Using it with dynamic params and state

```Html
<div [@zoomInDown]="{value:state,params:{timings:'1s', delay:'0ms', translate:'2000px'}}">
  <span>ZoomInDown Me</span>
</div>
<button mat-raised-button (click)="onAnimateIt()">Animate It</button>
```

onAnimateIt event handler

```Typescript
state: string = 'out';

onAnimateIt(): void{
    this.state = 'out';
    setTimeout(()=> {
      this.state = 'in';
    },1)
}
```
### Transitions

can be included into other triggers with different configurations and direction

```Typescript
import {
bounceTransition, flashTransition, pulseTransition, rubberBandTransition, shakeTransition, headShakeTransition,
swingTransition, tadaTransition, wobbleTransition, jelloTransition, heartBeatTransition,
backInTransition, backOutTransition, bounceInTransition, bounceOutTransition,
fadeInTransition, fadeOutTransition, flipInTransition, flipOutTransition, flipTransition,
lightspeedInTransition, lightspeedOutTransition, rotateInTransition, rotateOutTransition,
hingeTransition, jackInTheBoxTransition, rollTransition, zoomInTransition, zoomOutTransition,
slideInTransition, slideOutTransition,
} from "./ngxa";
```

Creating a trigger with multiple styles by using transition functions 

```Typescript
export function attentionsAndBounceInStyles(config?: Partial<AnimationConfig>): AnimationTriggerMetadata {
  return buildTrigger(
    {
      triggerName: (config && config.triggerName) || 'animations',
      transitions: [
        swingTransition({stateChangeExpressions: '* => swing'}),
        bounceTransition({stateChangeExpressions: '* => bounce'}),
        flashTransition({stateChangeExpressions: '* => flash'}),
        headShakeTransition({stateChangeExpressions: '* => headShake'}),
        heartBeatTransition({stateChangeExpressions: '* => heartBeat'}),
        jelloTransition({stateChangeExpressions: '* => jello'}),
        pulseTransition({stateChangeExpressions: '* => pulse'}),
        rubberBandTransition({stateChangeExpressions: '* => rubberBand'}),
        shakeTransition({stateChangeExpressions: '* => shake'}),
        tadaTransition({stateChangeExpressions: '* => tada'}),
        wobbleTransition({stateChangeExpressions: '* => wobble'}),

        // bounce in transition on different directions
        bounceInTransition({stateChangeExpressions: '* => bounceIn'}),
        bounceInTransition({stateChangeExpressions: '* => bounceInUp', direction: 'Up'}),
        bounceInTransition({stateChangeExpressions: '* => bounceInDown', direction: 'Down'}),
        bounceInTransition({stateChangeExpressions: '* => bounceInLeft', direction: 'Left'}),
        bounceInTransition({stateChangeExpressions: '* => bounceInRight', direction: 'Right'}),
      ]
    }
  )
}
```

## Stagger nested animations

To fire animations into a list can be used staggerNestedAnimations function as a parent animation

```Typescript
import {swing, zoomIn, staggerNestedAnimations} from "./ngxa";

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
  animations: [
    zoomIn({stateChangeExpressions:':enter, 0 => 1', timings:'1s', direction: 'Down'}),
    swing({stateChangeExpressions:':enter, 0 => 1'}),
    staggerNestedAnimations({timings:'300ms', stateChangeExpressions:':enter, 0 => 1'})
  ]
})

export class DescriptionComponent{
  status: boolean = true;
  onAnimateIt() {
    this.status = false;
    setTimeout(() => {
      this.status = true;
    }, 1);
  }
}
```

```Html
<div [@staggerNestedAnimations]="status">
  <div [@zoomInDown]="status">
    <span>Angular Animations Wrapper</span>
  </div>
  <div [@zoomInDown]="status">
    <div [@swing]="{value:status, params:{timings:'1500ms'}}">
      <span>Easy Builder, Dynamically, Reusable And Different Direction On Single Base Code</span>
    </div>
    <span>This wrapper helps you to implement animations easy in your angular application</span>
  </div>
  <button [@zoomInDown]="status" (click)="onAnimateIt()" >
    Animate It
  </button>
</div>
```
## Running Demo
```
npm install
npm start
```

## Authors

Klodian Shaba - [klodianshaba](https://github.com/klodianshaba)
