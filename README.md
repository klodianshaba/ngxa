# NGXA
This wrapper helps you to implement animations easy in your angular application\
Easy Builder, Dynamically, Reusable And Different Direction On Single Base Code\
Implements all animations in [Animate.css](https://animate.style/) with the power of wrapper based in [Angular animations](https://angular.io/guide/animations)  

## Demo

Demo of animations is available at [https://klodianshaba.github.io/ngxa](https://klodianshaba.github.io/ngxa)

## Example 

Building animation trigger by using buildTrigger function from ngxa:

```Typescript
import {animate, animation, AnimationTriggerMetadata, keyframes, style} from "@angular/animations";
import {AnimationConfig} from "../../../../ngxa/common";
import {buildTrigger} from "../../../../ngxa/base";

export const fadeAnimation = (animationConfig?: Partial<AnimationConfig>): AnimationTriggerMetadata => {
  return buildTrigger({
    triggerName: (animationConfig && animationConfig.triggerName) || 'fade',
    transitions: {
      animationReferenceMetadata:
        animation(
          animate(
            '{{timings}}',
            keyframes([
              style({opacity: 0, offset: 0}),
              style({opacity: 1, offset: 1}),
            ])
          )
        ),
      animationConfig,
      animationOptions: {params: {timings: '500ms'}}
    },
    states: [] // optional
  });
};
```

Including trigger into animations property in component decorator:

```Typescript
import {fadeAnimation} from "../../../../ngxa";

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
## Utility functions based on Animate.css style
