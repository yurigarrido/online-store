import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from '../components/Form';

class ProductDetails extends Component {
  constructor() {
    super();
    this.state = {
      item: {},
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;

    this.getItemInformation(id)
      .then((item) => this.setState({ item }));
  }

  async getItemInformation(id) {
    const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const data = await response.json();

    return data;
  }

  render() {
    const { item } = this.state;
    return (
      <div>
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
