
import React from 'react';
import Search from '../search/';
import Item from '../item/'
import { useSelector } from "react-redux";


function App() {
  const flight = useSelector(state => state.flight);

  return (
    <div className="app">
      FR1142 BR1142 BL1042 W62284
      <Search />
      <div className="app__result">
        {flight && flight !== "error" && <Item />}
        {flight === "error" ? (
          <div style={{ textAlign: "center" }}>
            Enter the correct flight number.
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
