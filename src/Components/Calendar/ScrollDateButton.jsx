import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ArrowButton = styled.button`
  width: 5%;
  cursor: pointer;
  height: 70px;
`;

function ScrollDateButton({ direction, scrollClick }) {
  const displayDate = () => {
    if (direction === 'left') {
      return (
        <ArrowButton onClick={() => scrollClick(direction)} className="date-scroll-button  date-scroll-button_left" type="button">&#x2039;</ArrowButton>
      );
    } if (direction === 'right') {
      return (
        <ArrowButton onClick={() => scrollClick(direction)} className="date-scroll-button date-scroll-button_right" type="button">&#x203A;</ArrowButton>
      );
    } return null;
  };
  return (
    <>{displayDate()}</>
  );
}

ScrollDateButton.propTypes = {
  direction: PropTypes.string.isRequired,
  scrollClick: PropTypes.func.isRequired,
};
export default ScrollDateButton;
