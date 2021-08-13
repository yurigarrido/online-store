import React from 'react';
import PropTypes from 'prop-types';

class AddedItem extends React.Component {
  constructor() {
    super();
    this.state = {
      numberOfItems: 1,
      cartItems: [],
    };
  }

  componentDidMount() {
    this.loadLocalStorage();
    this.presetUn();
  }

  presetUn = () => {
    const { item } = this.props;
    if (item.un) {
      this.setState({ numberOfItems: item.un });
    }
  }

  loadLocalStorage = () => {
    const { cartItems } = this.state;
    const recupered = JSON.parse(localStorage.getItem('cartItems'));
    if (recupered && recupered.length > 0) {
      recupered.forEach((item) => {
        cartItems.push(item);
      });
    }
  }

  saveLocalStorage = () => {
    const { cartItems } = this.state;
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }

  moreOneItems = () => {
    const { item } = this.props;
    const { available_quantity: max } = item;
    const { numberOfItems, cartItems } = this.state;
    const newArray = cartItems;
    if (numberOfItems === max) {
      newArray.forEach((iterable, index) => {
        if (iterable.title === item.title) {
          newArray[index].un = max;
        }
      });
    } else {
      newArray.forEach((iterable, index) => {
        if (iterable.title === item.title) {
          newArray[index].un = numberOfItems + 1;
        }
      });
    }
    this.setState((prev) => ({
      numberOfItems:
        prev.numberOfItems === max ? max : prev.numberOfItems + 1,
      cartItems: newArray,
    }
    ));
    this.saveLocalStorage();
  }

  lessOneItems = () => {
    const { item } = this.props;
    this.setState((prevous) => ({
      numberOfItems: prevous.numberOfItems === 1 ? 1 : prevous.numberOfItems - 1,
    }
    ));
    const { numberOfItems, cartItems } = this.state;
    const newArray = cartItems;
    newArray.forEach((iterable, index) => {
      if (iterable.title === item.title) {
        if (numberOfItems === 1) {
          newArray[index].un = 1;
        } else {
          newArray[index].un = numberOfItems - 1;
        }
      }
    });
    this.saveLocalStorage();
  }

  render() {
    const { numberOfItems } = this.state;
    const { item } = this.props;
    const { title, price } = item;
    console.log('additem');
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

AddedItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    available_quantity: PropTypes.number,
    price: PropTypes.number,
    un: PropTypes.number,
  }).isRequired,
};

export default AddedItem;
