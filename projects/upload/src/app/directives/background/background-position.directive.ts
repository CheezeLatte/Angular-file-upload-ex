import { Directive, HostBinding, Input } from '@angular/core';

export declare type TBackgroundPosition =
  'left top'
  | 'left center'
  | 'left bottom'
  | 'right top'
  | 'right center'
  | 'right bottom'
  | 'center top'
  | 'center center'
  | 'center bottom'
  | 'initial'
  | 'inherit'
  | string;

@Directive({
  selector: '[appBackgroundPosition]'
})
export class BackgroundPositionDirective {

  @HostBinding('style.background-position') backgroundPosition: TBackgroundPosition;

  constructor() { }

  @Input() set appBackgroundPosition(position: TBackgroundPosition) {
    this.backgroundPosition = position;
  }

}
