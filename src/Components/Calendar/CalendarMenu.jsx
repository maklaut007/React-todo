/* eslint-disable no-unused-vars */
import { connect } from 'react-redux';
import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import CalendarDate from './CalendarDate';
import myStoreProps from '../../global/types';
import ScrollDateButton from './ScrollDateButton';

const Calendar = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  width: 100%;
  height: 100px;
`;
const DatesList = styled.div`
  width: 90%;
  display: flex;
  position: relative;
  overflow: hidden;
`;
const DatesListScroll = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  left: ${(props) => `${props.menuScrollDistance}px`};
  transition: left 1s;
`;

function CalendarMenu({ myStore }) {
  const { dates } = myStore.todos;

  const ref = useRef(null);
  const [menuTotalWidth, setMenuTotalWidth] = useState(0);
  const [menuScrollDistance, setMenuScrollDistance] = useState(0);
  useEffect(() => {
    setMenuTotalWidth(ref.current ? ref.current.scrollWidth : 0);
  }, [ref.current]);

  const mapDates = dates.map(
    (item) => <CalendarDate date={item.date} dateId={item.id} key={Math.random()} />,
  );

  const scrollClick = (direction) => {
    if (direction === 'left' && menuScrollDistance < -180) {
      setMenuScrollDistance(menuScrollDistance + 180);
    } else if (direction === 'left' && menuScrollDistance > -180) {
      setMenuScrollDistance(0);
    } else if (direction === 'right' && -(menuScrollDistance) < (menuTotalWidth - 7 * 60 - 3 * 60)) {
      setMenuScrollDistance(menuScrollDistance - 180);
    } else {
      setMenuScrollDistance(-menuTotalWidth + 7 * 60);
    }
  };

  return (
    <Calendar>
      <ScrollDateButton direction="left" scrollClick={scrollClick} />
      <DatesList>
        <DatesListScroll ref={ref} menuScrollDistance={menuScrollDistance}>
          {mapDates}
        </DatesListScroll>
      </DatesList>
      <ScrollDateButton direction="right" scrollClick={scrollClick} />
    </Calendar>
  );
}

CalendarMenu.propTypes = myStoreProps;

export default connect(
  (state) => ({
    myStore: state,
  }),
  {},
)(CalendarMenu);
