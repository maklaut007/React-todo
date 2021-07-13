import { connect } from 'react-redux';
import React from 'react';
import Task from './Tasks/Task';
import AddTask from './Tasks/AddTask';
import TodoProgress from './ProgressBar/TodoProgress';
import CalendarMenu from './Calendar/CalendarMenu';
import myStoreProps from '../global/types';

function Todo({ myStore }) {
  const todoArr = myStore.todos.tasks
    .filter((task) => task.dateId === myStore.todos.dateFocus);
  const listTasks = todoArr.map((item) => <Task key={item.id} isCompleted={item.isCompleted} taskId={item.id} className="task" taskName={item.text} />);

  const totalTasks = todoArr.length || 1;
  const completedTasks = todoArr.filter((elem) => elem.isCompleted).length;
  return (
    <div className="todo">
      <CalendarMenu />
      <div className="task-list">{listTasks}</div>
      <AddTask />
      <TodoProgress progressPercent={(completedTasks / totalTasks) * 100} />
    </div>
  );
}
Todo.propTypes = myStoreProps;

export default connect(
  (state) => ({
    myStore: state,
  }),
  { },
)(Todo);
