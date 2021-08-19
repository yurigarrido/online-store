import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class HomeButton extends Component {
  render() {
    const { onClickHomeButton } = this.props;
    return (
      <Link to="/" onClick={ onClickHomeButton }>
        <i className="fas fa-home" />
      </Link>
    );
  }
}

HomeButton.propTypes = {
  onClickHomeButton: PropTypes.func.isRequired,
};
