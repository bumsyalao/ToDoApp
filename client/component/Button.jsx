import React, { Component } from 'react';


class Button extends Component{
  render() {
    return(
      <div className="submit-button">
        <input type="submit" className="button button:hover" />
      </div>
    );
  }
}

export default Button;