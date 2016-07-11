import { configureStore, connectStore } from 'midux';
import { reduxObservable } from 'redux-observable';

import counter from './reducers/counter';

let middleware = [
  reduxObservable()
];

if (process.env.NODE_ENV === 'development') {
  middleware.push(require('redux-logger')());
}

export const store = configureStore({
  counter
}, middleware);

export const connect = connectStore(store);
