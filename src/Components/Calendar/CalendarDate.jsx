import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { weekDaysShort } from '../../global/variables';
import { changeChosenDate } from '../../actions';

const Date = styled.div`
  background-color: ${(props) => (props.isFocussed ? '#9FEDD7' : '#FEF9C7')};
  border-bottom:  ${(props) => (props.isFocussed ? 'none' : '1px solid #026670')};
  border-right: 1px solid ${(props) => (props.isFocussed ? '#9FEDD7' : '#026670')};
  border-left: 1px solid ${(props) => (props.isFocussed ? '#9FEDD7' : '#026670')};
  width: 60px;
  cursor: pointer;
  height: 70px;
  position: relative;
  &:after{
    display: ${(props) => (props.isFocussed ? 'block' : 'none')};;
    content: "";
    position: absolute;
    bottom: -15px;
    left: -2px;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    border-top: 15px solid var(--mint);
  }
`;

function CalendarDate({
  dateId, date, myStore, changeDate,
}) {
  const changeFocus = () => {
    changeDate(dateId);
  };
  const checkFocus = () => {
    if (myStore.todos.dateFocus === dateId) {
      return (
        <Date isFocussed role="menuitem" tabIndex="0" href="#">
          <p>{`${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`}</p>
          <p>{weekDaysShort[(date.getDay())]}</p>
        </Date>
      );
    }
    return (
      <Date isFocussed={false} role="menuitem" tabIndex="0" onClick={changeFocus} onKeyPress={changeFocus}>
        <p>{`${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`}</p>
        <p>{weekDaysShort[(date.getDay())]}</p>
      </Date>
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
