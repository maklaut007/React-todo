import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { weekDaysShort, monthsShort } from '../../global/variables';
import { changeChosenDate } from '../../actions';

const Date = styled.div`
  background-color: ${(props) => (props.isFocussed ? '#9FEDD7' : '#FEF9C7')};
  border-bottom:  ${(props) => (props.isFocussed ? 'none' : '1px solid #026670')};
  border-right: 1px solid ${(props) => (props.isFocussed ? '#9FEDD7' : '#026670')};
  border-left: 1px solid ${(props) => (props.isFocussed ? '#9FEDD7' : '#026670')};
  min-width: 60px;
  cursor: pointer;
  height: 70px;
  position: relative;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  padding-bottom: 10px;
  font-size: 1.2em;
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
          <p>{`${monthsShort[date.getMonth()]} ${date.getDate()}`}</p>
          <p>{weekDaysShort[(date.getDay())]}</p>
        </Date>
      );
    }
    return (
      <Date isFocussed={false} role="menuitem" tabIndex="0" onClick={changeFocus} onKeyPress={changeFocus}>
        <p>{`${monthsShort[date.getMonth()]} ${date.getDate()}`}</p>
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
