import Inferno from 'inferno';

import configureStore from './configureStore';
import Root from './components/root';

const store = configureStore();

Inferno.render(
  <Root store={store} />,
  document.querySelector('#app')
);
