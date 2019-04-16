import React, { Component } from 'react';
import Record from './Record';

class Records extends Component {
  constructor(props) {
    super(props);
    this.state = {
      records: [
        {
          "id": 1,
          "date": "2018-09-01",
          "title": "income",
          "amount": 20
        },
        {
          "id": 2,
          "date": "2018-09-03",
          "title": "outcome",
          "amount": 16
        }
      ]
    }
  }

  render() {
    return (
      <div>
        <h2>Records</h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Date</th>
              <th>Title</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {this.state.records.map((record) => 
              <Record 
                record={record}
                key={record.id}
                />)}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Records;
