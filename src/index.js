import m from 'mithril';
import Counter from './containers/Counter';

m.route.mode = 'pathname';

m.route(
  document.getElementById('app'),
  '/',
  {
    '/': m(Counter)
  }
);