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
        <img style={ { width: '50px' } } src="https://image.flaticon.com/icons/png/512/126/126510.png" alt="shopping cart icon" />
        <span data-testid="shopping-cart-size">{size}</span>
      </div>
    );
  }
}

ShoppingCartImg.propTypes = {
  items: PropTypes.arrayOf({}).isRequired,
};

export default ShoppingCartImg;
