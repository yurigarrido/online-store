import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from './Form';
import './style/Details.css';

export default class Details extends Component {
  render() {
    const { selectedProduct, addToCart } = this.props;
    return (
      <div className="details-container">
        <div className="details-card">
          <h3 data-testid="product-detail-name">{selectedProduct.title}</h3>
          <img src={ selectedProduct.thumbnail } alt={ selectedProduct.title } />
          <ul>
            {selectedProduct.attributes.map((attribute) => (
              <li
                key={ attribute.id }
              >
                <span>{attribute.name}</span>
                <span>{attribute.value_name}</span>
              </li>))}
          </ul>
          <button
            className="btn-comprar-details"
            data-testid="product-detail-add-to-cart"
            type="button"
            onClick={ () => addToCart(selectedProduct) }
          >
            Adicionar ao carrinho
          </button>
        </div>
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
