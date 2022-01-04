# NGXA
This wrapper helps you to implement animations easy in your angular application\
Easy Builder, Dynamically, Reusable And Different Direction On Single Base Code

## Demo

Demo of animations is available at [https://klodianshaba.github.io/ngxa](https://klodianshaba.github.io/ngxa)

## Example 

Building trigger
```
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
    }
  });
};
```

Including trigger into animations component metadata
```
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

Template 
```
 <span [@fadeAnimation]="state">Klodian</span>
```
