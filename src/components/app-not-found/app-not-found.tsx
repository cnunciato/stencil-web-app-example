import { Component } from '@stencil/core';

@Component({
  tag: 'app-not-found',
  styleUrl: 'app-not-found.scss'
})
export class AppNotFound {
  render() {
    return (
      <section>
        <h1>Doh!</h1>
        <p>We couldn't find what you were looking for.</p>
        <app-linkbutton url='/' arrow='left'>Home</app-linkbutton>
      </section>
    );
  }
}
