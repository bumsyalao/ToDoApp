import React, { Component } from 'react';
import ToDoItem from './ToDoItem';

class ToDoList extends Component {
  render() {
    return (
      <div className="Todo-List">
        <ul>
          <li>
            wash plates
          </li>
        </ul>
      </div>
    )
  }
}

export default ToDoList;