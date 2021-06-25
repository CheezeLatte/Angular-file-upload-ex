import { Directive, HostBinding, Input } from '@angular/core';

export declare type TBackgroundSize = 'auto' | 'cover' | 'contain' | 'initial' | 'inherit' | string;

@Directive({
  selector: '[appBackgroundSize]'
})
export class BackgroundSizeDirective {

  @HostBinding('style.background-size') backgroundSize: TBackgroundSize = 'cover';

  constructor() { }

  @Input() set appBackgroundSize(size: TBackgroundSize) {
    this.backgroundSize = size;
  }

}
