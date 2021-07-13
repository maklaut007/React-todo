/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { deleteTaskfromReducer, changeTaskComplitionStatus } from '../../actions';
import DeleteTask from './DeleteTask';

const CheckboxContainer = styled.div`
  position: relative;
  cursor: pointer;
  user-select: none;
  
`;
const Checkbox = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: darkCyan;
  border-radius: 2px;
  background-color: ${(props) => (props.isChecked ? 'darkCyan' : '#eee')};
  &:hover{
    background-color: ${(props) => (props.isChecked ? 'darkCyan' : '#ccc')};
  }
  &:after {
    content: "";
    display: ${(props) => (props.isChecked ? 'block' : 'none')};
    position: absolute;
    left: 6px;
    top: 2px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

function Task({
  deleteTask, taskId, taskName, changeComplitionStatus, isCompleted,
}) {
  const [isComplted, setIsCompelted] = useState(isCompleted);
  const handleDeleteTask = () => {
    deleteTask({ taskId });
  };
  const handleCompleteTask = () => {
    changeComplitionStatus(taskId);
    setIsCompelted(!isComplted);
  };
  useEffect(() => {
  }, [isCompleted]);

  return (
    <div className="task">
      <CheckboxContainer>
        <Checkbox
          onClick={handleCompleteTask}
          isChecked={isCompleted}
          defaultChecked={isCompleted}
        />
      </CheckboxContainer>
      <div htmlFor="task-checkbox">{taskName}</div>
      <DeleteTask handleDeleteTask={handleDeleteTask} />
    </div>
  );
}

Task.propTypes = {
  deleteTask: PropTypes.func.isRequired,
  taskId: PropTypes.string.isRequired,
  taskName: PropTypes.string.isRequired,
  changeComplitionStatus: PropTypes.func.isRequired,
  isCompleted: PropTypes.bool.isRequired,
};
export default connect(
  (state) => ({
    myStore: state,
  }),
  {
    deleteTask: deleteTaskfromReducer,
    changeComplitionStatus: changeTaskComplitionStatus,
  },
)(Task);
