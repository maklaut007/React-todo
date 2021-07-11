import { connect } from 'react-redux';
import React from 'react';
import Task from './Tasks/Task';
import AddTask from './Tasks/AddTask';
import TodoProgress from './TodoProgress';
import CalendarMenu from './Calendar/CalendarMenu';
import myStoreProps from '../global/types';

function Todo({ myStore }) {
  const todoArr = myStore.todos.tasks
    .filter((task) => task.dateId === myStore.todos.dateFocus);
  const listTasks = todoArr.map((item) => <Task key={item.id} taskId={item.id} className="task" taskName={item.text} />);

  return (
    <div className="todo">
      <CalendarMenu />
      <div className="task-list">{listTasks}</div>
      <AddTask />
      <TodoProgress progressPercent={100} />
    </div>
  );
}
Todo.propTypes = myStoreProps; // Check if not working

export default connect(
  (state) => ({
    myStore: state,
  }),
  { },
)(Todo);
