import React, { Component } from "react";
import Record from "./Record";
import * as RecordsAPI from "../utils/RecordsAPI";
import NewRecordForm from "./NewRecordForm";

class Records extends Component {
  constructor(props) {
    super(props);
    this.state = {
      records: [],
      error: null,
      isLoaded: false
    };
  }

  componentDidMount() {
    RecordsAPI.getRecords()
      .then(res => {
        this.setState({
          records: res.data,
          isLoaded: true
        });
      })
      .catch(error => {
        this.setState({
          error,
          isLoaded: true
        });
      });
  }

  render() {
    const { records, error, isLoaded } = this.state;
    let recordsComponent;

    if (error) {
      recordsComponent = (
        <div className="loading-message loading-error-message">
          Error: {error.message}
        </div>
      );
    } else if (!isLoaded) {
      recordsComponent = <div className="loading-message">Loading...</div>;
    } else {
      recordsComponent = (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Date</th>
              <th>Title</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {records.map(record => (
              <Record key={record.id} {...record} />
            ))}
          </tbody>
        </table>
      );
    }

    return (
      <div>
        <h2>Records</h2>
        <NewRecordForm />
        {recordsComponent}
      </div>
    );
  }
}

export default Records;
