import React from 'react';
import PropTypes from 'prop-types';

class AddedItem extends React.Component {
  render() {
    const { item, addOne, removeOne, removeItem } = this.props;
    const round = (num) => (Math
      .round((num + Number.EPSILON) * 100) / 100).toFixed(2);
    return (
      <div className="cart-item">
        <img
          className="cart-item-thumb"
          src={ item.thumbnail }
          alt={ item.title }
        />
        <h5
          className="cart-item-name"
          data-testid="shopping-cart-product-name"
        >
          { item.title }
        </h5>
        <div className="cart-item-panel">
          <button
            type="button"
            onClick={ () => removeItem(item) }
          >
            X
          </button>
          <p>
            {`R$ ${round(item.price)}`}
          </p>
          <button
            data-testid="product-increase-quantity"
            type="button"
            onClick={ () => addOne(item) }
          >
            +
          </button>
          <p data-testid="shopping-cart-product-quantity">
            {`${item.quantity} un`}
          </p>
          <button
            data-testid="product-decrease-quantity"
            type="button"
            onClick={ () => removeOne(item) }
          >
            -
          </button>
        </div>
        <p>{`Total - R$ ${round(item.price * item.quantity)}`}</p>
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
    thumbnail: PropTypes.string,
  }).isRequired,
  addOne: PropTypes.func.isRequired,
  removeOne: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default AddedItem;
