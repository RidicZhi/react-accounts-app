import React, { Component } from "react";
import { createRecord } from "../utils/RecordsAPI";

export default class NewRecordForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: "",
      title: "",
      amount: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  buttonValid() {
    const { date, title, amount } = this.state;

    return !!(date && title && amount);
  }

  handleChange(e) {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { date, title, amount } = this.state;
    const body = {
      date,
      title,
      amount: Number.parseInt(amount, 0)
    };

    createRecord(body)
      .then(res => {
        this.props.onCreateRecord(res.data);
        this.setState({
          date: "",
          title: "",
          amount: ""
        });
      })
      .catch(err => console.log(err.message));
  }

  render() {
    const { date, title, amount } = this.state;

    return (
      <form
        className="form-row my-5 justify-content-center"
        onSubmit={this.handleSubmit}
      >
        <div className="col-2 mr-4">
          <input
            type="text"
            className="form-control"
            onChange={this.handleChange}
            placeholder="Date"
            name="date"
            value={date}
          />
        </div>
        <div className="col-3 mr-4">
          <input
            type="text"
            className="form-control"
            onChange={this.handleChange}
            placeholder="Title"
            name="title"
            value={title}
          />
        </div>
        <div className="col-2 mr-3">
          <input
            type="text"
            className="form-control"
            onChange={this.handleChange}
            placeholder="Amount"
            name="amount"
            value={amount}
          />
        </div>
        <div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!this.buttonValid()}
          >
            Create Record
          </button>
        </div>
      </form>
    );
  }
}
