
import React from 'react';
import Search from '../search/';
import Item from '../item/'
import { useSelector } from "react-redux";


function App() {
  const flight = useSelector(state => state.flight);
  const error = useSelector(state => state.error);

  return (
    <div className="app">
      <div className="app__numbers">
        Examples of flights numbers: FR1142  BR1142  BL1042  W62284
        </div>
      <Search />
      <div className="app__result">
        {flight && !error && <Item />}
        {error ? (
          <div className="app__error">
            Enter the correct flight number.
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
