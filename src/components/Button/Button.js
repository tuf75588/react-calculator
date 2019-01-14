import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';
class Button extends React.Component {
  handleClick = () => {
    this.props.clickHandler(this.props.name);
  };
  render() {
    const { name } = this.props;
    //dynamic className for css
    const className = ['component-button', this.props.orange ? 'orange' : '', this.props.wide ? 'wide' : ''];
    return (
      <div className={className.join(' ').trim()}>
        <button onClick={this.handleClick}>{name}</button>
      </div>
    );
  }
}
export default Button;
