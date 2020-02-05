import React from 'react';
import Search from '../search/';
import Item from '../item/';
import Loading from "../loading";
import { useSelector } from "react-redux";
import uniqid from 'uniqid';

function App() {
  const flights = useSelector(state => state.flights);
  const error = useSelector(state => state.error);
  const isLoading = useSelector(state => state.isLoading);

  return (
    <div className="app">
      <div className="app__numbers">
      </div>
      <Search />
      <div className="app__result">
        {flights && !error && flights.map(flight => <Item
          key={uniqid()}
          {...flight}
          flightDeparture={flight.departure}
          flightArrival={flight.arrival}
          arilineCompany={flight.airline.name}
          flightNumber={flight.flight.iata}
        />)}
        {error ? (
          <div className="app__error">
            Sorry, something wrong. Try different flight number.
          </div>
        ) : null}
      </div>
      {isLoading && <Loading />}
    </div>
  );
}

export default App;
