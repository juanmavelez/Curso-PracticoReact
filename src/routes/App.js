import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

/*    Components    */
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';

/**
 * Router that chooses what to render depending on the path that we are in
 */
const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <React component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
