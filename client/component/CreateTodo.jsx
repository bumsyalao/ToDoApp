import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputBox from './InputBox';
import Button from './Button';
import { newTodo } from '../actions/todos';

class CreateTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onChange(event) {
    event.preventDefault();
    console.log(event.target);
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit() {
    this.props.newTodo(this.state.name)
    //declare a function in app,
    //set state of functin to bool
    //pass function as a prop to component, call after dispatch
    if(this.props.isSuccess){
        this.props.getTodos();
    }
  }
  render() {
    console.log(this.state);
    return(
         <div className="input">
          <InputBox
          id="name"
          name="name"
          value={this.state.name}
          onChange={this.onChange} required/>
          <Button
          onClick={this.onSubmit} />
        </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    newTodo: (name) => dispatch(newTodo(name))
  };
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    isSuccess: state.isSuccess
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (CreateTodo);