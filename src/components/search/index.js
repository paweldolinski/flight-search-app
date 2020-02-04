import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
  formatDate,
  formatTime,
  getDurationFlight,
  checkIsDelayed,
  getDelayTime,
} from "../../utils/functions";

const SearchForm = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const error = useSelector(state => state.error)

  const onChange = e => setSearch(e.target.value);

  const getData = () => {
    return dispatch => {
      fetch(`https://raw.githubusercontent.com/ocebeki/flightData/master/data.json`)
        .then(res => res.json())
        .then(data => {
          const flight = data.find(item => item.flight.number === search)

          if (!flight) {
            dispatch({
              type: "FETCH_DATA",
              error: true
            })
            return
          }
          dispatch({
            type: "FETCH_DATA",
            error: false,
            data,
            flight: flight,
            departure: flight.departure,
            arrival: flight.arrival,
            company: flight.flight.company,
            number: flight.flight.number,
            isDelayed: checkIsDelayed(flight.departure.scheduledDepartureTime, flight.departure.expectedDepartureTime),
            status: flight.status,
            departureAirportCode: flight.departure.airportCode,
            depertueAirport: flight.departure.airport,
            scheduledDepartureDate: formatDate(flight.departure.scheduledDepartureTime),
            scheduledDepartureTime: formatTime(flight.departure.scheduledDepartureTime),
            expectedDepartureTime: formatTime(flight.departure.expectedDepartureTime),
            expectedDepartureDate: formatDate(flight.departure.expectedDepartureTime),
            arrivalAirportCode: flight.arrival.airportCode,
            arrivalAirport: flight.arrival.airport,
            scheduledArrivalDate: formatDate(flight.arrival.scheduledArrivalTime),
            scheduledArrivalTime: formatTime(flight.arrival.scheduledArrivalTime),
            expectedArrivalDate: formatDate(flight.arrival.expectedArrivalTime),
            expectedArrivalTime: formatTime(flight.arrival.expectedArrivalTime),
            flightDuration: getDurationFlight(flight.departure.scheduledDepartureTime, flight.arrival.scheduledArrivalTime),
            flightDurationDelayed: getDurationFlight(flight.departure.expectedDepartureTime, flight.arrival.expectedArrivalTime),
            delayTime: getDelayTime(flight.departure.scheduledDepartureTime, flight.departure.expectedDepartureTime),
          })
        })
    }
  }

  const onSubmit = e => {
    e.preventDefault();
    dispatch(getData())
  }
  return (
    <form onSubmit={onSubmit} className="search">
      <input
        className={error ? "search__input error" : "search__input"}
        value={search}
        placeholder="Search by flight number"
        onChange={onChange} />
      <div className="search__bar" />
    </form>
  )
}

export default SearchForm;