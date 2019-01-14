import React, { Component } from 'react';

import './App.css';
import Display from './Display/Display';
import calculate from '../logic/calculator';
import ButtonPanel from './ButtonPanel/ButtonPanel';

class App extends Component {
  state = {
    total: null,
    next: null,
    operation: null
  };
  handleClick = (buttonName) => {
    this.setState(calculate(this.state, buttonName));
  };
  render() {
    return (
      <div className="component-app">
        {/* ! display followed by button panel for the view */}
        <Display value={this.state.next || this.state.total || '0'} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
