import React from "react";
import Details from "./Details";
import Clock from "../clock";
import { useSelector } from "react-redux";

const More = () => {
  const state = useSelector(state => state);
  const {
    departure,
    arrival,
    company,
    number,
    status,
    isDelayed,
    scheduledDepartureTime,
    expectedDepartureTime,
    flightDurationDelayed,
    scheduledArrivalTime,
    expectedArrivalTime,
    expectedArrivalDate
  } = state;

  return (
    <div className="more">
      <div className="more__wrapper">
        <div className="more__status">
          <span className="more__detail">{`${company} ${number}`}</span>
          <span
            className={
              isDelayed
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
            />
            <Clock flightDuration={flightDurationDelayed} />
            <Details
              data={arrival}
              scheduled={scheduledArrivalTime}
              expected={expectedArrivalTime}
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