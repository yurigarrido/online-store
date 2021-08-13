import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from '../components/Form';
import ShoppingCartLink from '../components/ShoppingCartLink';

class ProductDetails extends Component {
  constructor() {
    super();
    this.state = {
      item: {},
      items: [],
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;

    this.getItemInformation(id)
      .then((item) => this.setState({ item }));

    this.loadLocalStorage();
  }

  async getItemInformation(id) {
    const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const data = await response.json();

    return data;
  }

  loadLocalStorage = () => {
    const { items } = this.state;
    const recupered = JSON.parse(localStorage.getItem('cartItems'));
    if (recupered && recupered.length > 0) {
      recupered.forEach((item) => {
        items.push(item);
      });
    }
  }

  render() {
    const { item, items } = this.state;
    return (
      <div>
        <ShoppingCartLink items={ items } />
        <h3 data-testid="product-detail-name">
          { item.title }
          <span>
            { ` - ${item.price}` }
          </span>
        </h3>
        <img src={ item.thumbnail } alt={ item.title } />
        <div>
          <h4>Especificação técnica</h4>
          <ul>
            <li>Em construção</li>
          </ul>
        </div>
        <Form />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape(
    { params: PropTypes.shape(
      { id: PropTypes.string },
    ) },
  ).isRequired,
};

export default ProductDetails;
