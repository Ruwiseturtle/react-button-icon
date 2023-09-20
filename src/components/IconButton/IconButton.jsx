import React from 'react';
import PropTypes from 'prop-types';

const IconButton = ({ children, onClick }) => (
  <button type="button" className="iconButton" onClick={onClick}>
    {children}
  </button>
);

IconButton.defaultProps = {
  onClick: () => null,
  children: null,
};

IconButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};

export default IconButton;