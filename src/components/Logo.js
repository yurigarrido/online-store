import React, { Component } from 'react';

export default class Title extends Component {
  render() {
    return (
      <div className="logo">
        <h1 className="header-title">
          FRONT
          <span className="span-color"> END </span>
          ONLINE STORE
        </h1>
        <i className="fas fa-shopping-cart" />
      </div>
    );
  }
}
