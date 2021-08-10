import React, { Component } from 'react';
import ProductListing from '../components/ProductListing';
import ShoppingCartLink from '../ShoppingCartLink';
// import PropTypes from 'prop-types';

class Main extends Component {
  render() {
    return (
      <div>
        <ShoppingCartLink />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <ProductListing />
      </div>
    );
  }
}

// Main.propTypes = {

// };

export default Main;
