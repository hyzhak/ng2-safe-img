import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { isBlank } from '@angular/common/src/facade/lang';

@Directive({ selector: '[src]' })
export class SafeImg {
  private _prevCondition: boolean = null;

  constructor(private _viewContainer: ViewContainerRef, private _templateRef: TemplateRef<Object>) {
  }

  @Input()
  set src(newCondition: any) {
    if (newCondition && (isBlank(this._prevCondition) || !this._prevCondition)) {
      this._prevCondition = true;
      const res = this._viewContainer.createEmbeddedView(this._templateRef);
      res.rootNodes[0].src = newCondition;
    } else if (!newCondition && (isBlank(this._prevCondition) || this._prevCondition)) {
      this._prevCondition = false;
      this._viewContainer.clear();
    }
  }
}
