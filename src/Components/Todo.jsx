import { connect } from 'react-redux';
import React from 'react';
import styled from 'styled-components';
import Task from './Tasks/Task';
import AddTask from './Tasks/AddTask';
import TodoProgress from './ProgressBar/TodoProgress';
import CalendarMenu from './Calendar/CalendarMenu';
import myStoreProps from '../global/types';

const TodoWrap = styled.div`
  background-color: var(--lightGrey);
  width: 100%;
  max-width: 460px;
  height: 800px;
  display: flex;
  flex-flow: column wrap;
`;
const TaskList = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

function Todo({ myStore }) {
  const todoArr = myStore.todos.tasks
    .filter((task) => task.dateId === myStore.todos.dateFocus);
  const listTasks = todoArr.map(
    (item) => (
      <Task
        key={item.id}
        isCompleted={item.isCompleted}
        className="task"
        taskId={item.id}
        taskName={item.text}
      />
    ),
  );

  const totalTasks = todoArr.length || 1;
  const completedTasks = todoArr.filter((elem) => elem.isCompleted).length;
  return (
    <TodoWrap>
      <CalendarMenu />
      <TaskList>{listTasks}</TaskList>
      <AddTask />
      <TodoProgress progressPercent={(completedTasks / totalTasks) * 100} />
    </TodoWrap>
  );
}
Todo.propTypes = myStoreProps;

export default connect(
  (state) => ({
    myStore: state,
  }),
  { },
)(Todo);
