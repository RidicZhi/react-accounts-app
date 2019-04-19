import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Record extends Component {
  render() {
    const { date, title, amount } = this.props;

    return (
      <tr>
        <td>{date}</td>
        <td>{title}</td>
        <td>{amount}</td>
      </tr>
    );
  }
}

Record.propTypes = {
  id: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string,
  amount: PropTypes.number
};
