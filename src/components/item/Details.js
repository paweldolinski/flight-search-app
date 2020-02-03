import React from "react";
import { useSelector } from "react-redux";

const Details = ({
  data,
  scheduled,
  expected,
}) => {
  const state = useSelector(state => state);
  const { isDelayed } = state
  const {
    airportCode,
    airport,
    terminal,
    BaggageBelt } = data;

  return (
    <div className="details">
      <span
        className={isDelayed ? "details__time details__time--delayed " : "details__time"}
      >
        {scheduled}
      </span>
      {isDelayed && <span className="details__row">{expected}</span>}
      <span className="details__row">{airportCode}</span>
      <span className="details__row">{airport}</span>
      {terminal &&
        <span className="details__row">Terminal: {terminal}</span>
      }
      {BaggageBelt &&
        <span>Baggage belt: {BaggageBelt} </span>
      }
    </div>
  );
};

export default Details;
