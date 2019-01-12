import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';
class Button extends React.Component {
  render() {
    return (
      <div className='component-button'>
        <button>some prop value</button>
      </div>
    );
  }
}
export default Button;
