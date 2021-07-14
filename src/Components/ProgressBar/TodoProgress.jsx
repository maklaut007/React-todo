import { number } from 'prop-types';
import React, { useState } from 'react';
import styled from 'styled-components';

const ProgressBar = styled.div`
position: relative;
`;
const ProgressCircle = styled.circle`
  transition: stroke-dashoffset 0.35s;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
`;
const PersentValue = styled.p`
  font-size: 1.8em;
  position: absolute;
  top:50%;
  left: 50%;
  transform: translateX(-45%) translateY(-50%);
`;

function TodoProgress({ progressPercent }) {
  const [percent, setPercent] = useState(0);

  React.useEffect(() => {
    setPercent(progressPercent);
  }, [progressPercent]);
  const radius = 90;
  const stroke = 14;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - ((percent === 0 ? 0.5 : percent) / 100) * circumference;
  return (
    <ProgressBar>
      <svg width={radius * 2} height={radius * 2}>
        <ProgressCircle
          cx={radius}
          cy={radius}
          r={normalizedRadius}
          stroke="darkCyan"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={strokeDashoffset}
        />
      </svg>
      <PersentValue className="percent__int">{`${Math.round(percent * 100) / 100}%` }</PersentValue>
    </ProgressBar>
  );
}

TodoProgress.propTypes = {
  progressPercent: number.isRequired,
};

export default TodoProgress;
