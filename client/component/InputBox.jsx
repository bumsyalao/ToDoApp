import React, { Component } from 'react';

class InputBox extends Component{
  render() {
    return(
      <div>
        <input type="input" className="create-todo" />
      </div>
    );
  }
}

export default InputBox;