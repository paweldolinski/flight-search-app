import React from "react";

const Details = ({
  data,
  scheduled,
  expected,
  isDeleyed
}) => {
  const { airportCode, airport, terminal, BaggageBelt } = data;

  return (
    <div classNAme="details">
      <span
        className={isDeleyed ? "details__time details__time--delayed " : "details__time"}
      >
        {scheduled}
      </span>
      {isDeleyed && <span className="details__row">{expected}</span>}
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
