import { Component, Prop } from '@stencil/core';
import moment from 'moment';

@Component({
  tag: 'app-datetime',
  styleUrl: 'app-datetime.scss',
  shadow: true
})
export class AppDateTime {

  @Prop() date: Date;
  @Prop() format: string;
  @Prop() type: 'from-now' | 'formatted';

  private translate(date) {
    const d = moment(date);

    switch (this.type) {
      case 'from-now': {
        return d.fromNow();
      }
      case 'formatted': {
        return d.format(this.format);
      }
    }

    return date.toString();
  }

  render() {
    return (
      <time dateTime={this.date.toString()}>
        {this.translate(this.date)}
      </time>
    );
  }
}
