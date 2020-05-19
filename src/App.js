import React from 'react';
import './App.css';

function App() {
  // React hooks syntax
  const [bag, fillBag] = React.useState("click for API")
  
  // API test handler
  const handler = () =>
    fetch( "https://icanhazdadjoke.com/", {headers: {accept: "Accept: application/json"}} ) // required http
      .then( x => x.json() ) // format response into JSON...
      .then( ({bag}) => fillBag(bag) ) // local state from API call

  return (
    <div className="App">
      <header className="App-header">
        <h1>Stocktwits</h1>
        <button onClick={handler}><h2>Click to test API</h2></button>
        <p>API sez: {bag}</p>
        <a
          className="App-link"
          href="https://j4cks.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Jacks Consulting</p>
        </a>
      </header>
    </div>
  );
}

export default App;
