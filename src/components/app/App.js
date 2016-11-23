import React from 'react';
import { Router, browserHistory } from 'react-router';
import routes from '../../routes';
import './app.css';

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router history={browserHistory} routes={routes} />
    );
  }
}