import React from 'react';
import Button from './Button';

const ToDoList = (props) => {
  return (
    <div className="todo-items">
      <div className="my-list">
        <h3> My List </h3>
      </div>
      <div className="my-items">
        <ol>
          {props.todos.map(todo => {
            return <li key={todo.id}>{todo.name} </li>;
          })}
        </ol>
      </div>
    </div>
  );
};

export default ToDoList;
