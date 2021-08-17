import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ShoppingCartImg from './ShoppingCartImg';

class ShoppingCartLink extends React.Component {
  render() {
    const { items } = this.props;
    return (
      <div>
        <Link
          to="/shopping-cart"
          data-testid="shopping-cart-button"
        >
          <ShoppingCartImg items={ items } />
        </Link>
      </div>
    );
  }
}

ShoppingCartLink.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default ShoppingCartLink;
