import { Component, ComponentFactoryResolver, Injector, ViewChild, ViewContainerRef, Compiler } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef;

  constructor(
    private compiler: Compiler,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector
  ) { }

  loadFeature() {
    import('./lazy-feature/lazy-feature.module').then(({ LazyFeatureModule, Component }) => {
      this.compiler.compileModuleAsync(LazyFeatureModule).then(moduleFactory => {
        const moduleRef = moduleFactory.create(this.injector);
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(Component);
        const { instance } = this.container.createComponent(componentFactory, null, this.injector, [], moduleRef);

        // set instance input props
        // instance.title = 'foo';

        // you have to manually call ngOnChanges
        // instance.ngOnChanges();
      });
    });
  }
}
