import React from 'react';
import PrimaryNav from './primarynav/PrimaryNav';

export default class Layout extends React.Component {
  render() {
    return (
      <div class="wrapper">
        <PrimaryNav />
        {this.props.children}
      </div>
    );
  }
}