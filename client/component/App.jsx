import React, { Component } from 'react';
import Header from './Header';
import InputBox from './InputBox';
import Button from './Button';
import ToDoList from './ToDoList';
import ToDoItem from './ToDoItem';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="input">
          <InputBox />
          <Button />
        </div>
        <div className="output">
          <ToDoList />
          <ToDoItem />
        </div>
      </div>
    );
  }
}
export default App;
