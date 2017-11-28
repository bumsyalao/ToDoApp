import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import InputBox from './InputBox';
import Button from './Button';
import CreateTodo from './createTodo';
import ToDoList from './ToDoList';
import ToDoItem from './ToDoItem';
import { getTodos, newTodo } from '../actions/todos';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      name: ''
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    this.props.getTodos()
      .then(() => {
        this.setState({
          todos: this.props.todos
        });
      });
  }

  onChange(event) {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit() {
    this.props.newTodo(this.state.name)
      .then(() => {
        this.setState({
          todos: this.props.todos
        })
      });
  }

  render() {
    return (
      <div className="container">
        <Header />
        <CreateTodo
          value={this.state.name}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
        />
        <div className="output">
          <ToDoList todos={this.state.todos} />
          <ToDoItem />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getTodos: () => dispatch(getTodos()),
    newTodo: name => dispatch(newTodo(name))
  };
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
