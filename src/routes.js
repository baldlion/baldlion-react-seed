import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import Layout from './components/Layout';
import Home from './components/home/Home';
import NotFound from './components/notfound/NotFound';

export default <Route path="/" component={Layout}>
  <IndexRoute component={Home}/>
  {/*<Route path="404" component={NotFound}/>*/}
  <Redirect from="*" to="404"/>
</Route>