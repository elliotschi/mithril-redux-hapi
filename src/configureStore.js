import { configureStore, connectStore } from 'midux';
import { reduxObservable } from 'redux-observable';

import counter from './reducers/counter';
import navigation from './reducers/navigation';

let middleware = [
  reduxObservable()
];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(require('redux-logger')());
}

export const store = configureStore({
  counter,
  navigation
}, middleware);

export const connect = connectStore(store);
