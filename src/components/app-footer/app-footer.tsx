import { Component } from '@stencil/core';

@Component({
  tag: 'app-footer',
  styleUrl: 'app-footer.scss',
  shadow: true
})
export class AppFooter {

  render() {
    return (
      <footer>
        <nav>
          &copy; 2018 Nifty Weekend Projects, LLC
        </nav>
      </footer>
    );
  }
}
