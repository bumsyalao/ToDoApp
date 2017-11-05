import React, { Component } from 'react';
import Button from './Button';

class ToDoItem extends Component {
  render() {
    return (
      <div className="Todo-Item">
        <div className ="update">
          <Button />
        </div>
        <div className="delete">
          <Button />
        </div>
      </div>
    )
  }
}

export default ToDoItem;