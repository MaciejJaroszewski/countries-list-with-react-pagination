import React from "react";
import PropTypes from "prop-types";
import { ListGroup, ListGroupItem, Panel } from "react-bootstrap";

class CountryItem extends React.Component {
  render() {
    const { countryData } = this.props;
    const { alpha3Code, capital, flag, name, subregion } = countryData;

    return (
      <div className="country-item-container">
        <Panel>
          <Panel.Heading>{name}</Panel.Heading>
          <Panel.Body>
            <ListGroup>
              <ListGroupItem>Alpha Code: {alpha3Code}</ListGroupItem>
              <ListGroupItem>Capital: {capital}</ListGroupItem>
              <ListGroupItem>Subregion: {subregion}</ListGroupItem>
              <ListGroupItem>
                Flag: <img src={flag} alt="flag" />
              </ListGroupItem>
            </ListGroup>
          </Panel.Body>
        </Panel>
      </div>
    );
  }
}

CountryItem.propTypes = {
  countryData: PropTypes.object.isRequired
};

export default CountryItem;
