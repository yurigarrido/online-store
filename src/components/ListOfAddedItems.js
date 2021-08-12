import React from 'react';
import PropTypes from 'prop-types';

class ListOfAddedItems extends React.Component {
  constructor() {
    super();
    this.state = {
      numberOfItems: 1,
    };
  }

  moreOneItems = () => {
    const { anAddedItem } = this.props;
    const { available_quantity: max } = anAddedItem;
    this.setState((prevous) => ({
      numberOfItems:
        prevous.numberOfItems === max ? max : prevous.numberOfItems + 1,
    }
    ));
  }

  lessOneItems = () => {
    this.setState((prevous) => ({
      numberOfItems: prevous.numberOfItems === 1 ? 1 : prevous.numberOfItems - 1,
    }
    ));
  }

  render() {
    const { numberOfItems } = this.state;
    const { anAddedItem } = this.props;
    const { title, price } = anAddedItem;
    console.log(typeof price);

    return (
      <div>
        <h5 data-testid="shopping-cart-product-name">{ title }</h5>
        <p>
          { price * numberOfItems }
        </p>
        <p data-testid="shopping-cart-product-quantity">
          {numberOfItems}
        </p>
        <button
          data-testid="product-increase-quantity"
          type="button"
          onClick={ this.moreOneItems }
        >
          +
        </button>
        <button
          data-testid="product-decrease-quantity"
          type="button"
          onClick={ this.lessOneItems }
        >
          -
        </button>
      </div>
    );
  }
}

ListOfAddedItems.propTypes = {
  anAddedItem: PropTypes.shape({
    title: PropTypes.string,
    available_quantity: PropTypes.number,
    price: PropTypes.number,
  }).isRequired,
};

export default ListOfAddedItems;
