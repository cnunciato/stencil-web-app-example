import { Component, Element, Listen, Prop } from '@stencil/core';
import { ActiveRouter } from '@stencil/router';

@Component({
  tag: 'app-header',
  styleUrl: 'app-header.scss'
})
export class AppHeader {

  @Element() el: HTMLElement;
  @Prop() router: ActiveRouter;

  @Listen('document:click')
  handleClick(e:UIEvent) {
    if (e.target !== this.menuButton) {
      this.menu.close();
    }
  }

  private get menuButton() {
    return this.el.querySelector('button');
  }

  private get menu() {
    const menuEl: HTMLElement = this.el.querySelector('.menu');
    const openClass = 'open';

    return {
      open: () => menuEl.classList.add(openClass),
      close: () => menuEl.classList.remove(openClass)
    };
  }

  toggleMenu() {
    this.menu.open();
  }

  render() {
    return (
      <header>
        <nav>
          <h1>
            <stencil-route-link url='/' anchorTitle="Home">
              The Daily Consectetur
            </stencil-route-link>
          </h1>
          <div class="menu">
            <button onClick={this.toggleMenu.bind(this)}>☰</button>
            <ul>
              <li><stencil-route-link url='/' anchorTitle="Home">Home</stencil-route-link></li>
              <li><stencil-route-link url='/' anchorTitle="About Us">About Us</stencil-route-link></li>
              <li><stencil-route-link url='/' anchorTitle="Contact">Contact</stencil-route-link></li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}
