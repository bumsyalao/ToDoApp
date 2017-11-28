import React, { Component } from 'react';

class Button extends Component{
  render() {
    return(
        <input 
          type="submit" 
          className="submit-button" 
          onClick={this.props.onClick} />
    );
  }
}

export default Button;
