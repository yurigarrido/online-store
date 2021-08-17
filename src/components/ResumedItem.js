import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ResumedItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <li>
        <img src={ item.thumbnail } alt={ item.title } />
        <p>{item.title}</p>
        <p>{`un - ${item.quantity}`}</p>
        <p>
          {`preço - ${item.quantity}un * ${item.price} = ${item.quantity * item.price}`}
        </p>
      </li>
    );
  }
}

ResumedItem.propTypes = {
  item: PropTypes.shape({
    thumbnail: PropTypes.string,
    title: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.number,
  }).isRequired,
};

export default ResumedItem;
