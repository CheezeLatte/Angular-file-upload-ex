import { Directive, HostBinding, Input } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Directive({
  selector: '[appBackgroundImage]'
})
export class BackgroundImageDirective {

  @HostBinding('style.background-image') backgroundImage: SafeStyle;

  constructor(private sanitizer: DomSanitizer) { }

  @Input() set appBackgroundImage(url: string) {
    this.backgroundImage = this.sanitizer.bypassSecurityTrustStyle(`url("${url}")`);
  }

}
