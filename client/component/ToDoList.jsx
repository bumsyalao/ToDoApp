import React, { Component } from 'react';
import Button from './Button';

class ToDoList extends Component {
  render() {
    return (
      <div className="todo-items">
        <div className="my-list">
          <h3> My List </h3>
        </div>
        <div className="my-items">
          <ol type="I">
            <li>wash plates</li>
          </ol>
        </div>
        <div className="next">
          <Button />
        </div>
      </div>
    );
  }
}

export default ToDoList;
