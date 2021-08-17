import React from 'react';
import PropTypes from 'prop-types';

class AddedItem extends React.Component {
  render() {
    const { item, addOne, removeOne, removeItem } = this.props;
    return (
      <div>
        <h5 data-testid="shopping-cart-product-name">{ item.title }</h5>
        <button
          type="button"
          onClick={ () => removeItem(item) }
        >
          X
        </button>
        <p>
          { item.price * item.quantity }
        </p>
        <p data-testid="shopping-cart-product-quantity">
          {item.quantity}
        </p>
        <button
          data-testid="product-increase-quantity"
          type="button"
          onClick={ () => addOne(item) }
        >
          +
        </button>
        <button
          data-testid="product-decrease-quantity"
          type="button"
          onClick={ () => removeOne(item) }
        >
          -
        </button>
      </div>
    );
  }
}

AddedItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    available_quantity: PropTypes.number,
    price: PropTypes.number,
    un: PropTypes.number,
    quantity: PropTypes.number,
  }).isRequired,
  addOne: PropTypes.func.isRequired,
  removeOne: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default AddedItem;
