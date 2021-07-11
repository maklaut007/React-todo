import {
  ADD_TASK, DELETE_TASK, CHANGE_DATE_FOCUS, CHANGE_TASK_COMPLETION_STATUS,
} from './actionTypes';

export const addTaskToReducer = (task) => ({
  type: ADD_TASK,
  payload: {
    id: task.id,
    text: task.text,
    dateId: task.dateId,
  },
});
export const deleteTaskfromReducer = (task) => ({
  type: DELETE_TASK,
  payload: {
    taskId: task.taskId,
  },
});
export const changeChosenDate = (dateId) => ({
  type: CHANGE_DATE_FOCUS,
  payload: {
    dateId,
  },
});
export const changeTaskComplitionStatus = (taskId) => ({
  type: CHANGE_TASK_COMPLETION_STATUS,
  payload: { taskId },
});
