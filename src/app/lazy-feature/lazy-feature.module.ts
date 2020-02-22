import { NgModule, ComponentFactoryResolver, ComponentFactory } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LazyComponent } from './lazy/lazy.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    LazyComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class LazyFeatureModule {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  public resolveComponent(): ComponentFactory<LazyComponent> {
    return this.componentFactoryResolver.resolveComponentFactory(LazyComponent);
  }
}
