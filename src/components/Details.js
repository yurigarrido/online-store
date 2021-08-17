import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from './Form';

export default class Details extends Component {
  render() {
    const { selectedProduct, addToCart } = this.props;
    return (
      <div>
        <h3 data-testid="product-detail-name">{selectedProduct.title}</h3>
        <img src={ selectedProduct.thumbnail } alt={ selectedProduct.title } />
        <ul>
          {selectedProduct.attributes.map((attribute) => (
            <li
              key={ attribute.id }
            >
              {`${attribute.name} - ${attribute.value_name}`}
            </li>))}
        </ul>
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          onClick={ () => addToCart(selectedProduct) }
        >
          Adicionar ao carrinho
        </button>
        <Form />
      </div>
    );
  }
}

Details.propTypes = {
  selectedProduct: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    attributes: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        value_name: PropTypes.string,
      }),
    ),
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};
