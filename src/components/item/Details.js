import React from "react";

const Details = ({
  data,
  status,
  scheduled,
  expected,
}) => {
  const { terminal, gate, airport, iata, baggage } = data

  return (
    <div className="details">
      <span
        className={status ? "details__time details__time--delayed " : "details__time"}
      >
        {scheduled}
      </span>
      {status && <span className="details__row">{expected}</span>}
      <span className="details__row">{iata}</span>
      <span className="details__row">{airport}</span>
      {terminal &&
        <span className="details__row">Terminal: {terminal}</span>
      }
      {gate &&
        <span className="details__row">Gate: {terminal}</span>
      }
      {baggage &&
        <span>Baggage belt: {baggage} </span>
      }
    </div>
  );
};

export default Details;
