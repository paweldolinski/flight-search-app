import React from "react";
import Details from "./Details";
import Clock from "../clock";

const More = ({
  flight,
  isDeleyed,
  status,
  expectedArrivalDate,
  scheduledArrivalTime,
  expectedArrivalTime,
  scheduledDepartureTime,
  expectedDepartureTime,
  departure,
  arrival,
  flightDurationDelayed
}) => {
  const { company, number } = flight;

  return (
    <div className="more">
      <div className="more__wrapper">
        <div className="more__status">
          <span className="more__detail">{`${company} ${number}`}</span>
          <span
            className={
              isDeleyed
                ? "more__flight-status more__flight-status--red"
                : "more__flight-status"
            }
          >
            Status: {status}
          </span>
        </div>
        <div className="more__row-middle">
          <div className="more__bar"></div>
          <div className="more__right">
            <Details
              data={departure}
              scheduled={scheduledDepartureTime}
              expected={expectedDepartureTime}
              isDeleyed={isDeleyed}
            />
            <Clock flightDuration={flightDurationDelayed} />
            <Details
              data={arrival}
              scheduled={scheduledArrivalTime}
              expected={expectedArrivalTime}
              isDeleyed={isDeleyed}
            />
          </div>
        </div>
        <div className="more__arrival">
          {`Arrives: ${expectedArrivalDate} | ${expectedArrivalTime}`}
        </div>
      </div>
    </div>
  );
};

export default More;
