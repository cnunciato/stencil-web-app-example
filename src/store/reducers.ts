import { combineReducers } from 'redux';
import * as actions from './actions';

const initialState = {
  all: [],
  selected: null
};

function posts(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case actions.SET_POSTS:
      return Object.assign({}, state, { all: payload });
    case actions.SET_SELECTED_POST:
      return Object.assign({}, state, { selected: payload });
  }

  return state;
}

const rootReducer = combineReducers({ posts });
export default rootReducer;
