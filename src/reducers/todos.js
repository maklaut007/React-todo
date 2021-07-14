const initialState = {
  dateFocus: 'date1',
  dates: [
    { id: 'date1', date: new Date(2021, 1, 4) },
    { id: 'date2', date: new Date(2021, 1, 5) },
    { id: 'date3', date: new Date(2021, 1, 6) },
    { id: 'date4', date: new Date(2021, 1, 7) },
    { id: 'date5', date: new Date(2021, 1, 8) },
    { id: 'date6', date: new Date(2021, 1, 9) },
    { id: 'date7', date: new Date(2021, 1, 10) },
    { id: 'date8', date: new Date(2021, 1, 11) },
    { id: 'date9', date: new Date(2021, 1, 12) },
    { id: 'date10', date: new Date(2021, 1, 13) },
    { id: 'date11', date: new Date(2021, 1, 14) },
  ],
  tasks: [
    {
      id: '1', text: 'one', isCompleted: false, dateId: 'date1',
    },
    {
      id: '18', text: 'two', isCompleted: false, dateId: 'date1',
    },
    {
      id: '2', text: 'three', isCompleted: true, dateId: 'date1',
    },
  ],
};
export default function toDoReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TASK': {
      const { id, text, dateId } = action.payload;
      return {
        ...state,
        tasks: [...state.tasks, {
          id, text, isCompleted: false, dateId,
        }],
      };
    }
    case 'DELETE_TASK': {
      const { taskId } = action.payload;
      const taskIndex = state.tasks.findIndex((elem) => elem.id === taskId);
      return {
        ...state,
        tasks: [
          ...state.tasks.slice(0, taskIndex),
          ...state.tasks.slice(taskIndex + 1)],
      };
      // items:  state.items.filter(item => TaskId !== item.id)
    }
    case 'CHANGE_TASK_COMPLETION_STATUS': {
      const { taskId } = action.payload;

      const taskIndex = state.tasks.findIndex((elem) => elem.id === taskId);
      return {
        ...state,
        tasks: [
          ...state.tasks.slice(0, taskIndex),
          {
            id: state.tasks[taskIndex].id,
            text: state.tasks[taskIndex].text,
            isCompleted: !state.tasks[taskIndex].isCompleted,
            dateId: state.tasks[taskIndex].dateId,
          },
          ...state.tasks.slice(taskIndex + 1)],
      };
    }
    case 'CHANGE_DATE_FOCUS': {
      const { dateId } = action.payload;
      return {
        ...state,
        dateFocus: dateId,
      };
    }
    default:
      return state;
  }
}
