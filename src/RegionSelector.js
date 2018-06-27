import React from "react";
import PropTypes from "prop-types";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";

import * as helpers from "./helpers";
import { REGIONS } from "./const";

class RegionSelector extends React.Component {
  onRegionSelect = ev => {
    const { target: { value } = {} } = ev;
    this.props.onRegionChange(value);
  };

  render() {
    const regions = Object.values(REGIONS);
    return (
      <FormGroup controlId="regionSelector" bsClass="region-selector">
        <ControlLabel>Select region</ControlLabel>
        <FormControl componentClass="select" onChange={this.onRegionSelect}>
          {regions.map((item, index) => (
            <option key={index} value={item}>
              {item.capitalize()}
            </option>
          ))}
        </FormControl>
      </FormGroup>
    );
  }
}

RegionSelector.propTypes = {
  region: PropTypes.string.isRequired,

  onRegionChange: PropTypes.func.isRequired
};

export default RegionSelector;
