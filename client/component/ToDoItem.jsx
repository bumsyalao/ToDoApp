import React, { Component } from 'react';
import Button from './Button';

class ToDoItem extends Component {
  render() {
    return (
      <div className="todo-item">
      <div className="item-color">
        <h3> Wash plates </h3>
        </div>
        <div className="buttons">
          <Button />
          <Button />
        </div>
      </div>
    );
  }
}

export default ToDoItem;
