import React, { Component } from 'react';
import Confrim from './component/confrim'
import './App.css';

class App extends Component {
  render () {
    return (
      <div>
        <button onClick={Confrim.bind(this, 1111)} >点我 点我</button>
      </div>
    )
  }
}

export default App;
