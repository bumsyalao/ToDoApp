import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputBox from './InputBox';
import Button from './Button';

const CreateTodo = props => {
  return (
    <div className="input">
      <InputBox
        id="name"
        name="name"
        value={props.value}
        onChange={props.onChange}
        required
      />
      <Button onClick={props.onSubmit} />
    </div>
  );
};

export default CreateTodo;
