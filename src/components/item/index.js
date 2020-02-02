import React, { useState } from 'react';
import { ReactComponent as Btn } from "../../assets/img/button.svg";
import { ReactComponent as Airplane } from "../../assets/img/airplane.svg";
import More from "./More.js";
import Clock from "../clock";
import {
  formatDate,
  formatTime,
  durationFlight,
  delayTime,
  checkIsDeleyed
} from "../../utils/functions";

const Item = ({ departure, arrival, status, flight }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleItem = () => {
    setIsOpen(!isOpen)
  }

  const scheduledDepartureDate = formatDate(departure.scheduledDepartureTime);
  const scheduledDepartureTime = formatTime(departure.scheduledDepartureTime);
  const expectedDepartureTime = formatTime(departure.expectedDepartureTime);
  const scheduledArrivalTime = formatTime(arrival.scheduledArrivalTime);
  const expectedArrivalDate = formatDate(arrival.expectedArrivalTime);
  const expectedArrivalTime = formatTime(arrival.expectedArrivalTime);
  const isDeleyed = checkIsDeleyed(
    departure.scheduledDepartureTime,
    departure.expectedDepartureTime
  );
  const timeDeleyed = delayTime(
    departure.scheduledDepartureTime,
    departure.expectedDepartureTime
  );
  const flightDuration = durationFlight(
    departure.scheduledDepartureTime,
    arrival.scheduledArrivalTime
  );
  const flightDurationDelayed = durationFlight(
    departure.expectedDepartureTime,
    arrival.expectedArrivalTime
  );
  const { company, number } = flight;

  return (
    <div className="item">
      <div className="item__date">Outbound:{scheduledDepartureDate}</div>
      <div className="item__flight-wrapper">
        <div className="item__col-left item__col">
          <div className="item__company">
            {company} {number}
          </div>
          <div
            className={
              isDeleyed ? "item__status item__status--delayed" : "item__status"
            }
          >
            {status} {isDeleyed ? `(+${timeDeleyed})` : null}
          </div>
        </div>
        <div className="item__col-middle item__col">
          <div className="item__departure">
            <span className="item__time bold">{scheduledDepartureTime}</span>
            <span className="item__airport-code">{departure.airportCode}</span>
          </div>
          <div className="item__flight-duration-wrapper">
            <Clock flightDuration={flightDuration} />
            <div className="item__flight-duration-bar-wrapper">
              <div className="item__flight-bar"></div>
              <span className="item__flight-icon">
                <Airplane />
              </span>
            </div>
          </div>
          <div className="item__arrive">
            <span className="item__time bold">{scheduledArrivalTime}</span>
            <span className="item__airport-code">{arrival.airportCode}</span>
          </div>
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
          flight={flight}
          isDeleyed={isDeleyed}
          status={status}
          scheduledDepartureTime={scheduledDepartureTime}
          expectedDepartureTime={expectedDepartureTime}
          expectedArrivalDate={expectedArrivalDate}
          scheduledArrivalTime={scheduledArrivalTime}
          expectedArrivalTime={expectedArrivalTime}
          departure={departure}
          arrival={arrival}
          flightDurationDelayed={flightDurationDelayed}
        />
      </div>
    </div>
  )
}

export default Item;