import { Component, Compiler, Injector, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef;

  constructor(
    private compiler: Compiler,
    private injector: Injector
  ) { }

  loadFeature() {
    // Dynamic import, activate code splitting and on demand loading of feature module
    import('./lazy-feature/lazy-feature.module').then(({ LazyFeatureModule }) => {
      // Compile the module
      this.compiler.compileModuleAsync(LazyFeatureModule).then(moduleFactory => {
        // Create a moduleRef, resolve an entry component, create the component
        const moduleRef = moduleFactory.create(this.injector);
        const componentFactory = moduleRef.instance.resolveComponent();
        const { instance } = this.container.createComponent(componentFactory);

        // set component Input() property
        instance.title = 'foo';

        // you have to manually call ngOnChanges for dynamically created components
        instance.ngOnChanges();
      });
    });
  }
}
