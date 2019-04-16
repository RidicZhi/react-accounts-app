import React, { Component } from 'react';

class Record extends Component {
  render() {
    const { date, title, amount } = this.props;

    return (
      <tr>
        <td>{ date }</td>
        <td>{ title }</td>
        <td>{ amount }</td>
      </tr>
    );
  }
}

export default Record;
