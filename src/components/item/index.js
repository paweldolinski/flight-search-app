import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { ReactComponent as Btn } from "../../assets/img/button.svg";
import { ReactComponent as Airplane } from "../../assets/img/airplane.svg";
import More from "./More.js";
import Clock from "../clock";

const Item = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDelayed,
    delayTime,
    status,
    scheduledDepartureTime,
    scheduledDepartureDate,
    scheduledArrivalTime,
    departureAirportCode,
    arrivalAirportCode,
    flightDuration,
    company, number } = useSelector(state => state);

  const toggleItem = () => {
    setIsOpen(!isOpen)
  }

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
              isDelayed ? "item__status item__status--delayed" : "item__status"
            }
          >
            {status} {isDelayed ? `(+${delayTime})` : null}
          </div>
        </div>
        <div className="item__col-middle item__col">
          <div className="item__departure">
            <span className="item__time bold">{scheduledDepartureTime}</span>
            <span className="item__airport-code">{departureAirportCode}</span>
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
            <span className="item__airport-code">{arrivalAirportCode}</span>
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
        <More />
      </div>
    </div>
  )
}

export default Item;