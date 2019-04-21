import React, { Component } from "react";
import Record from "./Record";
import { getRecords } from "../utils/RecordsAPI";
import NewRecordForm from "./NewRecordForm";

class Records extends Component {
  constructor(props) {
    super(props);
    this.state = {
      records: [],
      error: null,
      isLoaded: false
    };

    this.onCreateRecord = this.onCreateRecord.bind(this);
    this.onUpdateRecord = this.onUpdateRecord.bind(this);
  }

  componentDidMount() {
    getRecords()
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

  onCreateRecord(record) {
    const { records } = this.state;
    const newRecords = [...records, record];

    this.setState({
      records: newRecords
    });
  }

  onUpdateRecord(record, newRecord) {
    const { records } = this.state;
    const recordIndex = records.indexOf(record);
    const newRecords = records.map((item, index) => {
      if (index !== recordIndex) {
        return item;
      }
      return {
        ...item,
        ...newRecord
      };
    });

    this.setState({
      records: newRecords
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
        <table className="table table-bordered text-center">
          <thead className="thead-dark">
            <tr>
              <th className="w-25">Date</th>
              <th className="w-25">Title</th>
              <th className="w-25">Amount</th>
              <th className="w-25">Actions</th>
            </tr>
          </thead>
          <tbody>
            {records.map(record => (
              <Record
                key={record.id}
                record={record}
                onUpdateRecord={this.onUpdateRecord}
              />
            ))}
          </tbody>
        </table>
      );
    }

    return (
      <div className="mx-5 px-5">
        <h2>Records</h2>
        <NewRecordForm onCreateRecord={this.onCreateRecord} />
        {recordsComponent}
      </div>
    );
  }
}

export default Records;
