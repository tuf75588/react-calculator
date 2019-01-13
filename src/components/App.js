import React, { Component } from 'react';

import './App.css';
import Display from './Display/Display';

import ButtonPanel from './ButtonPanel/ButtonPanel';

class App extends Component {
  render() {
    return (
      <div className='component-app'>
        {/* ! display followed by button panel for the view */}
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
