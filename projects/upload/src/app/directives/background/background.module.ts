import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundImageDirective } from './background-image.directive';
import { BackgroundPositionDirective } from './background-position.directive';
import { BackgroundSizeDirective } from './background-size.directive';

@NgModule({
  declarations: [
    BackgroundImageDirective,
    BackgroundPositionDirective,
    BackgroundSizeDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BackgroundImageDirective,
    BackgroundPositionDirective,
    BackgroundSizeDirective
  ]
})
export class BackgroundModule { }
