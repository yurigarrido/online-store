import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ResumedItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <li>
        <img src={ item.thumbnail } alt={ item.title } />
        <p>{item.title}</p>
        <p>{`un - ${item.un}`}</p>
        <p>{`preço - ${item.un} * ${item.price} = ${item.un * item.price}`}</p>
      </li>
    );
  }
}

ResumedItem.propTypes = {
  item: PropTypes.shape({
    thumbnail: PropTypes.string,
    title: PropTypes.string,
    un: PropTypes.number,
    price: PropTypes.number,
  }).isRequired,
};

export default ResumedItem;
