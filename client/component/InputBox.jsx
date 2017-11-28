import React, { Component } from 'react';

class InputBox extends Component {
  render() {
    return (
        <input 
          type="input" 
          className="create-todo"
          onChange={this.props.onChange} 
          value={this.props.value}
          name={this.props.name} />
    );
  }
}

export default InputBox;
