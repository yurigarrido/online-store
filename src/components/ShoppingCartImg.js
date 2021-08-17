import React from 'react';
import PropTypes from 'prop-types';

class ShoppingCartImg extends React.Component {
  render() {
    const { items } = this.props;
    let size = 0;
    if (items) {
      items.forEach((item) => {
        if (item.un) size += item.un;
        else size += 1;
      });
    }
    return (
      <div>
        <i className="fas fa-shopping-cart" data-testid="shopping-cart-size">
          <span data-testid="shopping-cart-size">{size}</span>
        </i>
      </div>
    );
  }
}

ShoppingCartImg.propTypes = {
  items: PropTypes.arrayOf({}).isRequired,
};

export default ShoppingCartImg;
