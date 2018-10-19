import { Component, Prop } from '@stencil/core';
import { Store } from '@stencil/redux';
import { appStore } from '../../store/index';

@Component({
  tag: 'app-root'
})
export class AppRoot {
  @Prop({ context: 'store' }) store: Store;

  componentWillLoad() {
    this.store.setStore(appStore);
  }

  render() {
    return (
      <div>
        <app-header></app-header>
        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/' component='app-home' exact={true} />
              <stencil-route url='/posts/:id' component='app-post' exact={true} />
              <stencil-route component='app-not-found'></stencil-route>
            </stencil-route-switch>
          </stencil-router>
        </main>
        <app-footer></app-footer>
      </div>
    );
  }
}
