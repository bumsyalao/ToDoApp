import React, { Component } from 'react';
import Header from './Header';
import InputBox from './InputBox';
import Button from './Button';

class App extends Component {

  render() {
    return (
      <div className="container">
        <Header />
        <InputBox />
        <Button />
      </div>
    );
  }
}
 export default App;
