import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { item } = this.props;
    const { thumbnail, title, price, id } = item;
    return (
      <Link data-testid="product-detail-link" to={ `/product-details/${id}` }>
        <section data-testid="product">
          <h3>
            { title }
          </h3>
          <img src={ thumbnail } alt={ title } />
          <p>
            { price }
          </p>
        </section>
      </Link>
    );
  }
}

export default ProductCard;

ProductCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
  }).isRequired,
};
