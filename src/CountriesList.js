import React from "react";
import PropTypes from "prop-types";

import CountryItem from "./CountryItem";
import Pagination from "./Pagination";

class CountriesList extends React.Component {
  state = {
    pageIndex: 1,
    countriesOnPage: 6,
    search: ""
  };

  get totalPages() {
    const { countriesOnPage } = this.state;
    const { countries } = this.props;
    const countriesCount = countries.length;
    return Math.ceil(countriesCount / countriesOnPage);
  }

  onPageIndexChange = pageIndex => this.setState({ pageIndex });
  onCountriesOnPageChange = countriesOnPage =>
    this.setState({
      pageIndex: 1,
      countriesOnPage
    });
  onSearchChange = search => this.setState({ search });

  filterSearched = ({ name }) => {
    const { search } = this.state;
    const searchedName = search.toLowerCase();
    const lowercaseName = name.toLowerCase();
    return lowercaseName.includes(searchedName);
  };

  renderPagination() {
    const { totalPages } = this;
    const { pageIndex, search } = this.state;
    return (
      <Pagination
        pageIndex={pageIndex}
        totalPages={totalPages}
        search={search}
        onSearchChange={this.onSearchChange}
        onPageIndexChange={this.onPageIndexChange}
        onCountriesOnPageChange={this.onCountriesOnPageChange}
      />
    );
  }

  render() {
    const { countriesOnPage, pageIndex } = this.state;
    const { countries } = this.props;
    const maybeFilteredSource = countries.filter(this.filterSearched);
    const offset = (pageIndex - 1) * countriesOnPage;
    const source = maybeFilteredSource.slice(offset, offset + countriesOnPage);

    return (
      <div className="countries-container">
        {this.renderPagination()}
        <div className="countries-list">
          {source.map((item, index) => (
            <CountryItem countryData={item} key={index} />
          ))}
        </div>
      </div>
    );
  }
}

CountriesList.propTypes = {
  countries: PropTypes.array
};

export default CountriesList;
