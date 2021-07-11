import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { deleteTaskfromReducer, changeTaskComplitionStatus } from '../../actions';
import Checkbox from '../StyledComponents/Checkbox';

function Task({
  deleteTask, taskId, taskName, changeComplitionStatus,
}) {
  const [isComplted, setIsComplted] = useState(false);
  const handleDeleteTask = () => {
    deleteTask({ taskId });
  };
  const handleCompleteTask = () => {
    changeComplitionStatus(taskId);
    setIsComplted(!isComplted);
  };
  return (
    <div className="task">
      <Checkbox />
      <input className="complete-task-button" onClick={handleCompleteTask} type="button" value="Compl?" />
      <p>{taskName}</p>
      <input className="delete-task" onClick={handleDeleteTask} type="button" value="Delete" />

    </div>
  );
}

Task.propTypes = {
  deleteTask: PropTypes.func.isRequired,
  taskId: PropTypes.string.isRequired,
  taskName: PropTypes.string.isRequired,
  changeComplitionStatus: PropTypes.func.isRequired,
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
