import { Client } from '../client';

export const SET_POSTS = 'SET_POSTS';
export const SET_SELECTED_POST = 'SET_SELECTED_POST';

export function fetchPosts() {
  return dispatch => {
    Client.fetchPosts()
      .then(res => res.json())
      .then(data => dispatch(setPosts(data)));
  };
}

export function fetchPost(id: number) {
  return dispatch => {
    Client.fetchPost(id)
      .then(res => res.json())
      .then(data => dispatch(setSelectedPost(data)));
  };
}

function setPosts(payload, error = undefined) {
  return {
    type: SET_POSTS,
    payload,
    error
  };
}

function setSelectedPost(payload, error = undefined) {
  return {
    type: SET_SELECTED_POST,
    payload,
    error
  }
}
