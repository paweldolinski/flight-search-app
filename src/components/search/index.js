import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';

const SearchForm = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const error = useSelector(state => state.error);

  const onChange = e => {
    const newValue = e.target.value.replace(/\s+/g, '').toUpperCase();
    setSearch(newValue);
  }

  const getData = () => {
    dispatch({
      type: "FETCH_DATA",
      isLoading: true
    })

    const params = {
      access_key: '281ecb94930c5900c6c917e1a018114a',
      flight_iata: search,
    }

    axios.get(`http://api.aviationstack.com/v1/flights`, { params })
      .then(response => {
        const flights = response.data.data;
        if (flights.length === 0) {
          dispatch({
            type: "FETCH_DATA",
            error: true,
            isLoading: false
          })
          return;
        }

        dispatch({
          type: "FETCH_DATA",
          error: false,
          flights,
          isLoading: false
        })
      }).catch(error => {
        console.log(error);
      })
  }

  const onSubmit = e => {
    e.preventDefault();
    if (!search) return
    getData();
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