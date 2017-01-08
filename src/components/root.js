import Inferno from 'inferno';
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'inferno-redux';
import { Router, Route, IndexRoute } from 'inferno-router';

import App from './app';
import Users from './users';
import UserDetails from './userDetails';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={createBrowserHistory()}>
      <Route component={App}>
        <IndexRoute component={Users} />
        <Route path="/user/:id" component={UserDetails} />
      </Route>
    </Router>
  </Provider>
);

export default Root;
