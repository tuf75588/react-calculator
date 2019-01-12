import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import './ButtonPanel.css';
class ButtonPanel extends React.Component {
  render() {
    return (
      <div className='panel'>
        <Button />
        <Button />
        <Button />
        <Button />
      </div>
    );
  }
}
export default ButtonPanel;
