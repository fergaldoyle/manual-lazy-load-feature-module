import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-lazy-component',
  templateUrl: './lazy-component.component.html',
  styleUrls: ['./lazy-component.component.css']
})
export class LazyComponentComponent {
  constructor(private formBuilder: FormBuilder) { }

  categories = ['one', 'two', 'three'];
  form = this.formBuilder.group({
    category: ['']
  });
}
