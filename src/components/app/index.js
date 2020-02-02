
import React, { useEffect, useState } from 'react';
import Search from '../search/';
import Item from '../item/'


function App() {

  const [data, setData] = useState([]);
  const [flight, setFlight] = useState()
  const [search, setSearch] = useState('');

  const onChange = e => {
    setSearch(e.target.value)
  }

  const onSubmit = e => {
    e.preventDefault();
    const flight = data.filter(item => item.flight.number === search)
    setFlight(flight[0])
  }

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/ocebeki/flightData/master/data.json')
      .then(response => response.json())
      .then(data => setData(data));
  }, [])

  return (
    <div className="app">
      FR1142 BR1142 BL1042 W62284
      <Search onChange={onChange} onSubmit={onSubmit} search={search} />
      <div className="app__result">
        {flight && <Item key={flight.number} {...flight} />}
      </div>
    </div>
  );
}

export default App;
