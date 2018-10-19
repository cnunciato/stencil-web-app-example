import { Component, Prop, State } from '@stencil/core';
import { Store, Action } from '@stencil/redux';
import { MatchResults } from '@stencil/router';
import { fetchPost } from '../../store/actions';
import { Post } from '../../app-types';

@Component({
  tag: 'app-post',
  styleUrl: 'app-post.scss'
})
export class AppPost {
  @Prop({ context: 'store' }) store: Store;
  @Prop() match: MatchResults;
  @State() post: Post;

  fetchPost: Action;

  componentWillLoad() {
    this.store.mapDispatchToProps(this, { fetchPost });

    this.store.mapStateToProps(this, state => {
      return {
        post: state.posts.selected
      };
    });

    this.fetchPost(this.match.params.id);
  }

  render() {

    if (!this.post) {
      return;
    }

    return (
      <article>
        <section class="title">
          <h1>{this.post.title}</h1>
          <h2>{this.post.preview}</h2>
          <app-datetime
            date={this.post.date}
            type='formatted'
            format='dddd, MMMM DD, YYYY'>
          </app-datetime>
        </section>
        <section innerHTML={this.post.body}></section>
        <app-linkbutton url='/' arrow='left'>
          Home
        </app-linkbutton>
      </article>
    );
  }
}
