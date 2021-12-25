import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {AnimationModel} from "../../models/animation.model";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() animation: AnimationModel = {triggerName: 'animate', value:true, params:{}}
  @Output() onAnimate: EventEmitter<AnimationModel> = new EventEmitter<AnimationModel>();

  constructor() { }

  ngOnInit(): void {
  }
  onAnimateIt(){
    this.onAnimate.next(this.animation);
  }

}
