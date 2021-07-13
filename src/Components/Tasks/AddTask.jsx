import { connect } from 'react-redux';
import React, { useState } from 'react';
import styled from 'styled-components';
import _uniqueId from 'lodash/uniqueId';
import PropTypes from 'prop-types';
import { addTaskToReducer } from '../../actions';
import myStoreProps from '../../global/types';

const AddTaskForm = styled.form`
  margin: 10px auto;
`;
const AddTaskText = styled.input`
  width: 200px;
  height: 30px;
  font-size: 1.2em;
  border: 1px solid #9FEDD7;
  border-radius: 6px 0px 0px 6px;
  padding: 2px 8px;
  &:focus, &:focus + input{
    outline:none;
    box-shadow: 0px 3px 6px #026670;
  }
`;
const AddTaskButton = styled.input`
  background-color: #9FEDD7;
  width: 30px;
  height: 30px;
  font-size: 1.2em;
  cursor: pointer;
  transition: background-color 0.2s;
  border-radius: 0px 6px 6px 0px;
  &:hover{
    background-color: #01b3b3;
    box-shadow: inset 0 0 3px #01b3b3;
  }
`;

function AddTask({ addTask, myStore }) {
  const [textValue, setTextValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (textValue) {
      addTask({ id: _uniqueId('task_'), text: textValue, dateId: myStore.todos.dateFocus });
      setTextValue('');
    }
  };

  const handleInputChange = (text) => {
    setTextValue(text.target.value);
  };

  return (
    <AddTaskForm>
      <AddTaskText placeholder="Add task" type="text" onChange={handleInputChange} value={textValue} />
      <AddTaskButton onClick={handleSubmit} type="submit" value="+" />
    </AddTaskForm>
  );
}
AddTask.propTypes = {
  myStore: myStoreProps.myStore.isRequired,
  addTask: PropTypes.func.isRequired,
};
export default connect(
  (state) => ({
    myStore: state,
  }),
  { addTask: addTaskToReducer },
)(AddTask);
