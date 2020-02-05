import React from 'react';

const Time = ({ scheduled, iata }) => {

  return (
    <div className="time">
      <span className="time__time bold">{scheduled}</span>
      <span className="time__airport-code">{iata}</span>
    </div>
  )
}

export default Time