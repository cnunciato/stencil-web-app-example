import { Component, Prop, State } from '@stencil/core';
import { Store, Action } from '@stencil/redux';
import { fetchPosts } from '../../store/actions';
import { Post } from '../../app-types';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss'
})
export class AppHome {
  @Prop({ context: 'store' }) store: Store;
  @State() posts: Array<Post>;

  fetchPosts: Action;

  componentWillLoad() {
    this.store.mapDispatchToProps(this, { fetchPosts });

    this.store.mapStateToProps(this, state => {
      return {
        posts: state.posts.all
      };
    });

    this.fetchPosts();
  }

  render() {
    return (
      <app-posts posts={this.posts}></app-posts>
    );
  }
}
