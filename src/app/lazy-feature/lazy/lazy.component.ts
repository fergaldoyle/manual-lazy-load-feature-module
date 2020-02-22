import { Component, OnChanges, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.css']
})
export class LazyComponent implements OnChanges {
  @Input() title = 'Default title';
  constructor(private formBuilder: FormBuilder) { }

  categories = ['one', 'two', 'three'];
  form = this.formBuilder.group({
    category: ['']
  });

  ngOnChanges() {
    console.log('ngOnChanges');
  }
}
