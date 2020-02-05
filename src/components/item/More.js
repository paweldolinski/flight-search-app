import React from "react";
import Details from "./Details";
import Clock from "../clock";

const More = ({
  status,
  flight_status,
  flightDeparture,
  flightDurationDelayed,
  flightArrival,
  arilineCompany,
  flightNumber,
  scheduledDepartureTime,
  estimatedDepartureTime,
  scheduledArrivalTime,
  estimatedArrivalData,
  estimatedArrivalTime,

}) => {

  return (
    <div className="more">
      <div className="more__wrapper">
        <div className="more__status">
          <span className="more__detail">{arilineCompany} {flightNumber}</span>
          <span
            className={
              status
                ? "more__flight-status more__flight-status--red"
                : "more__flight-status"
            }
          >
            Status: {flight_status}
          </span>
        </div>
        <div className="more__row-middle">
          <div className="more__bar"></div>
          <div className="more__right">
            <Details
              status={status}
              data={flightDeparture}
              scheduled={scheduledDepartureTime}
              expected={estimatedDepartureTime}
            />
            <Clock flightDuration={flightDurationDelayed} />
            <Details
              status={status}
              data={flightArrival}
              scheduled={scheduledArrivalTime}
              expected={estimatedArrivalTime}
            />
          </div>
        </div>
        <div className="more__arrival">
          {`Arrives: ${estimatedArrivalData} | ${estimatedArrivalTime}`}
        </div>
      </div>
    </div>
  );
};

export default More;
