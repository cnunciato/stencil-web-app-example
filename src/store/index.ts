import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;
const finalCreateStore = composeEnhancers(applyMiddleware(thunk))(createStore);

export const appStore = finalCreateStore(rootReducer);
