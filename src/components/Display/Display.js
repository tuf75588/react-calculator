import React from 'react';
import PropTypes from 'prop-types';
import './Display.css';
function Display(props) {
  const { value } = props;
  return (
    <div className="component-display">
      <div>{value}</div>
    </div>
  );
}
export default Display;
