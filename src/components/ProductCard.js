import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { item } = this.props;
    const { thumbnail, title, price } = item;
    return (
      <section data-testid="product">
        <h3>
          { title }
        </h3>
        <img src={ thumbnail } alt={ title } />
        <p>
          { price }
        </p>
      </section>
    );
  }
}

export default ProductCard;

ProductCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};
