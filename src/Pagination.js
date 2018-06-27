import React, { Fragment } from "react";
import PropTypes from "prop-types";
import {
  FormGroup,
  FormControl,
  ControlLabel,
  Pagination
} from "react-bootstrap";

const SELECT_OPTIONS = [6, 12, 18, 24, 30];

class CustomPagination extends React.Component {
  onCountriesOnPageChange = ev => {
    const { target: { value } = {} } = ev;
    const parsedValue = parseInt(value); // string from select
    this.props.onCountriesOnPageChange(parsedValue);
  };

  renderPrefixPagination() {
    const { onPageIndexChange, pageIndex, totalPages } = this.props;
    if (totalPages < 2) {
      return null;
    }
    const disabled = pageIndex < 2;
    const onClick = page => () =>
      disabled ? undefined : onPageIndexChange(page);
    const onClickFirst = onClick(1);
    const onClickPrev = onClick(pageIndex - 1);
    return (
      <Fragment>
        <Pagination.First onClick={onClickFirst} disabled={disabled} />
        <Pagination.Prev onClick={onClickPrev} disabled={disabled} />
      </Fragment>
    );
  }

  renderPostfixPagination() {
    const { onPageIndexChange, pageIndex, totalPages } = this.props;
    if (totalPages < 2) {
      return null;
    }
    const disabled = pageIndex === totalPages;
    const onClick = page => () =>
      disabled ? undefined : onPageIndexChange(page);
    const onClickLast = onClick(totalPages);
    const onClickNext = onClick(pageIndex + 1);
    return (
      <Fragment>
        <Pagination.Next onClick={onClickNext} disabled={disabled} />
        <Pagination.Last onClick={onClickLast} disabled={disabled} />
      </Fragment>
    );
  }

  renderPagination() {
    const { onPageIndexChange, pageIndex, totalPages } = this.props;
    const source = new Array(totalPages || 1).fill(null);
    return (
      <Pagination>
        {this.renderPrefixPagination()}
        {source.map((item, index) => {
          const page = index + 1;
          const active = page === pageIndex;
          const onClick = () => onPageIndexChange(page);
          return (
            <Pagination.Item active={active} onClick={onClick} key={page}>
              {page}
            </Pagination.Item>
          );
        })}
        {this.renderPostfixPagination()}
      </Pagination>
    );
  }

  render() {
    return (
      <div className="pagination">
        {this.renderPagination()}
        <div className="pagination-select">
          <FormGroup controlId="countriesOnPage">
            <ControlLabel>Countries on page</ControlLabel>
            <FormControl
              componentClass="select"
              onChange={this.onCountriesOnPageChange}
            >
              {SELECT_OPTIONS.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </FormControl>
          </FormGroup>
        </div>
      </div>
    );
  }
}

CustomPagination.propTypes = {
  pageIndex: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,

  onCountriesOnPageChange: PropTypes.func.isRequired,
  onPageIndexChange: PropTypes.func.isRequired
};

export default CustomPagination;
