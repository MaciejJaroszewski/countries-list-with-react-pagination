import React from "react";
import ReactDOM from "react-dom";

import CountriesList from "./CountriesList";

import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Countries</h1>
        <CountriesList />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
