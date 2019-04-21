import React, { Component } from "react";
import PropTypes from "prop-types";
import { updateRecord, deleteRecord } from "../utils/RecordsAPI";

export default class Record extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false
    };

    this.handleEditingToggle = this.handleEditingToggle.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleEditingToggle() {
    this.setState({
      edit: !this.state.edit
    });
  }

  handleUpdate(e) {
    e.preventDefault();

    const updatedRecord = {
      date: this.refs.date.value,
      title: this.refs.title.value,
      amount: Number.parseInt(this.refs.amount.value, 0)
    };

    updateRecord(this.props.record.id, updatedRecord)
      .then(res => this.props.onUpdateRecord(this.props.record, res.data))
      .catch(err => console.log(err.message));

    this.handleEditingToggle();
  }

  handleDelete(e) {
    e.preventDefault();

    deleteRecord(this.props.record.id)
      .then(res => {
        this.props.onDeleteRecord(res.data);
      })
      .catch(err => console.log(err.message));
  }

  returnRecordRow() {
    const { date, title, amount } = this.props.record;
    return (
      <tr>
        <td className="align-middle">{date}</td>
        <td className="align-middle">{title}</td>
        <td className="align-middle">{amount}</td>
        <td>
          <button
            className="btn btn-info mr-3 btn-action"
            onClick={this.handleEditingToggle}
          >
            Edit
          </button>
          <button
            className="btn btn-danger btn-action"
            onClick={this.handleDelete}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }

  returnEditingRow() {
    const { date, title, amount } = this.props.record;
    return (
      <tr>
        <td>
          <input
            type="text"
            className="form-control"
            defaultValue={date}
            ref="date"
          />
        </td>
        <td>
          <input
            type="text"
            className="form-control"
            defaultValue={title}
            ref="title"
          />
        </td>
        <td>
          <input
            type="text"
            className="form-control"
            defaultValue={amount}
            ref="amount"
          />
        </td>
        <td>
          <button
            className="btn btn-info mr-3 btn-action"
            onClick={this.handleUpdate}
          >
            Update
          </button>
          <button
            className="btn btn-danger btn-action"
            onClick={this.handleEditingToggle}
          >
            Cancel
          </button>
        </td>
      </tr>
    );
  }

  render() {
    const { edit } = this.state;

    if (edit) {
      return this.returnEditingRow();
    }
    return this.returnRecordRow();
  }
}

Record.propTypes = {
  id: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string,
  amount: PropTypes.number
};
