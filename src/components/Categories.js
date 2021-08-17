import React from 'react';
import PropTypes from 'prop-types';

class Categories extends React.Component {
  render() {
    const { searchCategory, category: { name } } = this.props;
    return (
      <button data-testid="category" onClick={ searchCategory } type="button">
        {name}
      </button>
    );
  }
}

Categories.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  searchCategory: PropTypes.func.isRequired,
};

export default Categories;
