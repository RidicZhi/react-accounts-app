import React, { Component } from "react";
import Record from "./Record";
import { getRecords } from "../utils/RecordsAPI";
import NewRecordForm from "./NewRecordForm";
import AmountBox from "./AmountBox";

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
    this.onDeleteRecord = this.onDeleteRecord.bind(this);
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

    const newRecords = records.map(item => {
      if (item.id !== record.id) {
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

  onDeleteRecord(record) {
    const { records } = this.state;

    const newRecords = records.filter(item => item.id !== record.id);

    this.setState({
      records: newRecords
    });
  }

  getIncome() {
    let incomeRecordArray = this.state.records.filter(record => {
      return record.amount >= 0;
    });

    return incomeRecordArray.reduce((prev, curr) => {
      return prev + curr.amount;
    }, 0);
  }

  getOutcome() {
    let incomeRecordArray = this.state.records.filter(record => {
      return record.amount <= 0;
    });

    return incomeRecordArray.reduce((prev, curr) => {
      return prev + curr.amount;
    }, 0);
  }

  getBalance() {
    return this.getIncome() + this.getOutcome();
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
        <table className="table table-bordered text-center ">
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
                onDeleteRecord={this.onDeleteRecord}
              />
            ))}
          </tbody>
        </table>
      );
    }

    return (
      <div className="mx-5 px-5">
        <h2 className="my-4 bg-primary text-white text-center">Accounts App</h2>
        <div className="row mb-3">
          <AmountBox title="Income" type="success" amount={this.getIncome()} />
          <AmountBox title="Outcome" type="danger" amount={this.getOutcome()} />
          <AmountBox title="Balance" type="info" amount={this.getBalance()} />
        </div>
        <NewRecordForm onCreateRecord={this.onCreateRecord} />
        {recordsComponent}
      </div>
    );
  }
}

export default Records;
