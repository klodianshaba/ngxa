import {AnimationOptions} from "@angular/animations";

export interface AnimationModel{
  triggerName:string,
  value: string | number | boolean,
  params: AnimationOptions | null
}
