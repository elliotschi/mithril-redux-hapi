import m from 'mithril';
import Counter from './containers/Counter';
import Navigation from './containers/Navigation';

m.route.mode = 'pathname';

m.route(
  document.getElementById('app'),
  '/',
  {
    '/': m(Counter),
    '/navigation': m(Navigation)
  }
);