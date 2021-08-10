import React from 'react';
import PropTypes from 'prop-types';
import InputAndButton from './InputAndButton';
import ProductCard from './ProductCard';

class ProductListing extends React.Component {
  render() {
    const { items, handleOnChange, handleOnClick } = this.props;
    if (items.length === 0) {
      return (
        <div>
          <InputAndButton
            handleOnClick={ handleOnClick }
            onChange={ handleOnChange }
          />
          <p> Nenhum produto foi encontrado </p>
        </div>
      );
    }

    return (
      <div>
        <InputAndButton
          handleOnClick={ handleOnClick }
          onChange={ handleOnChange }
        />
        {
          items
            .map((item) => (<ProductCard key={ item.id } item={ item } />))
        }
      </div>
    );
  }
}

ProductListing.propTypes = {
  items: PropTypes.arrayOf({}).isRequired,
  handleOnChange: PropTypes.func.isRequired,
  handleOnClick: PropTypes.func.isRequired,
};

export default ProductListing;
