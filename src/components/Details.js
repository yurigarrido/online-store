import React, { Component } from 'react';
import Form from './Form';

export default class Details extends Component {
  render() {
    const { selectedProduct } = this.props;
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
        <Form />
      </div>
    );
  }
}
