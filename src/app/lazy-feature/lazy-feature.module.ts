import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponentComponent } from './lazy-component/lazy-component.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LazyComponentComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class LazyFeatureModule { }
export const Component = LazyComponentComponent;