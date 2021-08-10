import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { iten } = this.props;
    const { thumbnail, title, price } = iten;
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
  iten: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }),
};

ProductCard.defaultProps = {
  iten: [],
};
