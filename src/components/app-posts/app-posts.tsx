import { Component, Prop } from '@stencil/core';
import { Store } from '@stencil/redux';
import { Post } from '../../app-types';

@Component({
  tag: 'app-posts',
  styleUrl: 'app-posts.scss'
})
export class AppPosts {
  @Prop({ context: 'store' }) store: Store
  @Prop() posts: Array<Post> = [];

  private postUrl(post) {
    return `/posts/${post.id}`;
  }

  private ellipsify(html = '', maxWords = 30): string {
    const el = document.createElement('div');
    el.innerHTML = html;

    const delim = ' ';
    const words = el.innerText.split(delim);
    let result = '';

    if (words.length > maxWords) {
      result = `${words.slice(0, maxWords).join(delim)} ...`;
    }
    else {
      result = words.join(delim);
    }

    return result;
  }

  render() {
    return (
      <ol class="posts">
        {
          this.posts.map(post => {
            return (
              <li>
                <h2>
                  <stencil-route-link url={this.postUrl(post)} anchorTitle={post.title}>
                    {post.title}
                  </stencil-route-link>
                </h2>
                <app-datetime date={post.date} type='from-now'></app-datetime>
                <p innerHTML={this.ellipsify(post.body)}></p>
                <app-linkbutton url={this.postUrl(post)} arrow='right'>
                  Read On
                </app-linkbutton>
              </li>
            );
          })
        }
      </ol>
    );
  }
}
