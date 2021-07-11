import React from 'react';
import { connect } from 'react-redux';
import { weekDaysShort } from '../../global/variables';
import { changeChosenDate } from '../../actions';

function CalendarDate({
  dateId, date, myStore, changeDate,
}) {
  const changeFocus = () => {
    changeDate(dateId);
  };
  const checkFocus = () => {
    if (myStore.todos.dateFocus === dateId) {
      return (
        <div role="menuitem" tabIndex="0" href="#" className="date date-focus">
          <p>{`${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`}</p>
          <p>{weekDaysShort[(date.getDay())]}</p>
        </div>
      );
    }
    return (
      <div role="menuitem" tabIndex="0" className="date" onClick={changeFocus} onKeyPress={changeFocus}>
        <p>{`${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`}</p>
        <p>{weekDaysShort[(date.getDay())]}</p>
      </div>
    );
  };
  return (
    checkFocus()
  );
}

export default connect(
  (state) => ({
    myStore: state,
  }),
  { changeDate: changeChosenDate },
)(CalendarDate);
