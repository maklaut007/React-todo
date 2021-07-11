import { number } from 'prop-types';
import React, { useState } from 'react';

function TodoProgress({ progressPercent }) {
  const [percent, setPercent] = useState(0);

  React.useEffect(() => {
    setPercent(progressPercent);
  }, [progressPercent]);
  const radius = 30;
  const stroke = 4;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percent / 100) * circumference;
  return (
    <div className="progress-bar">
      <svg width={radius * 2} height={radius * 2} className="progress-bar__svg">
        <circle
          className="progress-bar__circle"
          cx={radius}
          cy={radius}
          r={normalizedRadius}
          stroke="white"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={strokeDashoffset}
        />
      </svg>
      <button type="button" className="progress-bar__percent">
        <span className="percent__int">{percent}</span>
      </button>
    </div>
  );
}

TodoProgress.propTypes = {
  progressPercent: number.isRequired,
};

export default TodoProgress;
