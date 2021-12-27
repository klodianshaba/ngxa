import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {AnimationModel} from "../../wrapper/animations/animations";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() animation: AnimationModel = {triggerName: 'animate', value:true, params:{}, canAnimate:false,active: false}
  @Input() view: boolean = true;
  @Output() onAnimate: EventEmitter<AnimationModel> = new EventEmitter<AnimationModel>();
  @Output() onView: EventEmitter<AnimationModel> = new EventEmitter<AnimationModel>();

  constructor() { }

  ngOnInit(): void {
  }
  onAnimateIt(): void{
    this.onAnimate.next(this.animation);
  }
  onViewIt(): void{
    this.onView.next(this.animation);
  }

}
