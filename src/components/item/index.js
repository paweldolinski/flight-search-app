import React, { useState } from 'react';
import { ReactComponent as Btn } from "../../assets/img/button.svg";
import { ReactComponent as Airplane } from "../../assets/img/airplane.svg";
import More from "./More.js";
import Clock from "../clock";
import Time from './Time';
import {
  formatDate,
  formatTime,
  getDurationFlight,
  checkStatus,
  getDelayTime,
} from "../../utils/functions";

const Item = ({ flightArrival, flightDeparture, arilineCompany, flightNumber, flight_status }) => {
  const [isOpen, setIsOpen] = useState(false);
  const scheduledDepartureDate = formatDate(flightDeparture.scheduled);
  const scheduledDepartureTime = formatTime(flightDeparture.scheduled);
  const scheduledArrivalTime = formatTime(flightArrival.scheduled);
  const estimatedDepertureData = formatDate(flightDeparture.estimated);
  const estimatedDepartureTime = formatTime(flightDeparture.estimated);
  const estimatedArrivalData = formatDate(flightArrival.estimated);
  const estimatedArrivalTime = formatTime(flightArrival.estimated);
  const flightDuration = getDurationFlight(flightDeparture.scheduled, flightArrival.scheduled);
  const flightDurationDelayed = getDurationFlight(flightDeparture.estimated, flightArrival.estimated);
  const status = checkStatus(flight_status);
  const delayTime = getDelayTime(flightDeparture.scheduled, flightDeparture.estimated);

  const toggleItem = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={`item item--${flight_status}`}>
      <div className="item__date">Outbound:{scheduledDepartureDate}</div>
      <div className="item__flight-wrapper">
        <div className="item__col-left item__col">
          <div className="item__company">
            {arilineCompany} {flightNumber}
          </div>
          <div className="item__status">
            {flight_status} {flight_status === "delayed" ? `(+${delayTime})` : null}
          </div>
        </div>
        <div className="item__col-middle item__col">
          <Time
            scheduled={scheduledDepartureTime}
            iata={flightDeparture.iata}
          />
          <div className="item__flight-duration-wrapper">
            <Clock flightDuration={flightDuration} />
            <div className="item__flight-duration-bar-wrapper">
              <div className="item__flight-bar"></div>
              <span className="item__flight-icon">
                <Airplane />
              </span>
            </div>
          </div>
          <Time
            scheduled={scheduledArrivalTime}
            iata={flightArrival.iata}
          />
        </div>
        <div className="item__col-right item__col">
          <Btn
            className={isOpen ? "item__btn" : "item__btn item__btn--down"}
            onClick={toggleItem}
          />
        </div>
      </div>
      <div
        className={
          isOpen ? "item__more-info item__more-info--open" : "item__more-info"
        }
      >
        <More
          status={status}
          flightDeparture={flightDeparture}
          flightArrival={flightArrival}
          flight_status={flight_status}
          arilineCompany={arilineCompany}
          flightNumber={flightNumber}
          estimatedDepertureData={estimatedDepertureData}
          estimatedDepartureTime={estimatedDepartureTime}
          estimatedArrivalData={estimatedArrivalData}
          estimatedArrivalTime={estimatedArrivalTime}
          scheduledDepartureTime={scheduledDepartureTime}
          scheduledArrivalTime={scheduledArrivalTime}
          flightDurationDelayed={flightDurationDelayed}
        />
      </div>
    </div>
  )
}

export default Item;