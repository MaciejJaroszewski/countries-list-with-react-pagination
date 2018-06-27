import React from "react";

import { countries } from "./const";
import CountryItem from "./CountryItem";
import Pagination from "./Pagination";

class CountriesList extends React.Component {
  state = {
    countries,
    pageIndex: 1,
    countriesOnPage: 6
  };

  get totalPages() {
    const { countries, countriesOnPage } = this.state;
    const countriesCount = countries.length;
    return Math.ceil(countriesCount / countriesOnPage);
  }

  onPageIndexChange = pageIndex => this.setState({ pageIndex });
  onCountriesOnPageChange = countriesOnPage =>
    this.setState({
      pageIndex: 1,
      countriesOnPage
    });

  renderPagination() {
    const { totalPages } = this;
    const { pageIndex } = this.state;
    return (
      <Pagination
        pageIndex={pageIndex}
        totalPages={totalPages}
        onPageIndexChange={this.onPageIndexChange}
        onCountriesOnPageChange={this.onCountriesOnPageChange}
      />
    );
  }

  render() {
    const { countries, countriesOnPage, pageIndex } = this.state;
    const offset = (pageIndex - 1) * countriesOnPage;

    const source = countries.slice(offset, offset + countriesOnPage);

    return (
      <div className="countries-container">
        {this.renderPagination()}
        <div className="countries-list">
          {source.map((item, index) => (
            <CountryItem countryData={item} key={index} />
          ))}
        </div>
        {this.renderPagination()}
      </div>
    );
  }
}

export default CountriesList;
