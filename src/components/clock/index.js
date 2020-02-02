import React from "react";
import ClockIcon from "../../assets/img/clock.svg";

const Clock = ({ flightDuration }) => {
  return (
    <div className="clock">
      <div className="clock__wrapper">
        <img className="clock__clock" src={ClockIcon} alt="clock" />
        <span className="clock__duration">{flightDuration}</span>
      </div>
    </div>
  );
};

export default Clock;
