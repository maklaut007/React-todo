import { connect } from 'react-redux';
import React, { useState } from 'react';
import _uniqueId from 'lodash/uniqueId';
import PropTypes from 'prop-types';
import { addTaskToReducer } from '../../actions';
import myStoreProps from '../../global/types';

function AddTask({ addTask, myStore }) {
  const [textValue, setTextValue] = useState('');

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    if (textValue !== '') {
      addTask({ id: _uniqueId('task_'), text: textValue, dateId: myStore.todos.dateFocus });
      setTextValue('');
    }
  };

  const handleInputChange = (text) => {
    setTextValue(text.target.value);
  };

  return (
    <form>
      <input className="add-task__text" type="text" onChange={handleInputChange} value={textValue} />
      <input className="add-task__button" onClick={handleSubmit} type="submit" value="hello" />
    </form>
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
