import React from 'react';
import PropTypes from 'prop-types';

class ButtonAddToCard extends React.Component {
  render() {
    const { addToCart, item, available } = this.props;
    return (
      <button
        data-testid="product-add-to-cart"
        onClick={ () => {
          addToCart(item, available);
        } }
        type="submit"
      >
        Adicionar ao carrinho
      </button>
    );
  }
}

export default ButtonAddToCard;

ButtonAddToCard.propTypes = {
  addToCart: PropTypes.func.isRequired,
  item: PropTypes.shape().isRequired,
  available: PropTypes.number.isRequired,
};
