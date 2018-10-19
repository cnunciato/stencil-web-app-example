import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'app-linkbutton',
  styleUrl: 'app-linkbutton.scss',
  shadow: true
})
export class AppLinkButton {

  @Prop() url: string;
  @Prop() arrow: 'left' | 'right';

  render() {
    return (
      <span>
        <stencil-route-link url={this.url} class={this.arrow}>
          <slot />
        </stencil-route-link>
      </span>
    );
  }
}
