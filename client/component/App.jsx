import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import InputBox from './InputBox';
import Button from './Button';
import CreateTodo from './createTodo';
import ToDoList from './ToDoList';
import ToDoItem from './ToDoItem';
import { getTodos } from '../actions/todos';

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: []
    }
  }

  componentWillMount() {
    console.log(this.props)
    this.props.getTodos();
    console.log(this.props.todos);
  };

  render() {
    return (
      <div className="container">
        <Header />
        <CreateTodo />
        <div className="output">
          <ToDoList todos={this.props.todos} />
          <ToDoItem />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTodos: () => dispatch(getTodos())
  };
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

