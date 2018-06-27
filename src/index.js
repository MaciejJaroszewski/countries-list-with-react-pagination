import React from "react";
import ReactDOM from "react-dom";

import { REGIONS } from "./const";
import CountriesList from "./CountriesList";
import RegionSelector from "./RegionSelector";
import { getCountries } from "./helpers";

import "./styles.css";

class App extends React.Component {
  state = {
    region: REGIONS.africa,
    countries: []
  };

  componentDidMount() {
    const { region } = this.state;
    getCountries(region).then(this.updateCountries);
  }

  onRegionChange = region => this.setState({ region });

  updateCountries = countries => this.setState({ countries });

  componentDidUpdate(prevProps, prevState) {
    const { region } = this.state;
    const { region: prevRegion } = prevState;
    if (region !== prevRegion) {
      getCountries(region).then(this.updateCountries);
    }
  }

  render() {
    const { countries, region } = this.state;
    return (
      <div className="App">
        <h1>Countries</h1>
        <RegionSelector onRegionChange={this.onRegionChange} region={region} />
        <CountriesList countries={countries} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
