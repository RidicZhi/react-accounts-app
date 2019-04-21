import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Record extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
    }
    this.handleEditingToggle = this.handleEditingToggle.bind(this);
  }

  handleEditingToggle() {
    this.setState({
      edit: !this.state.edit,
    })
  }

  returnRecordRow() {
    const { date, title, amount } = this.props;
    return(
      <tr>
        <td>{date}</td>
        <td>{title}</td>
        <td>{amount}</td>
        <td>
          <button className="btn btn-info mr-3 btn-action" onClick={this.handleEditingToggle}>Edit</button>
          <button className="btn btn-danger btn-action">Delete</button>
        </td>
      </tr>
    )
  }

  returnEditingRow() {
    const { date, title, amount } = this.props;
    return(
      <tr>
        <td><input type="text" className="form-control" defaultValue={date}/></td>
        <td><input type="text" className="form-control" defaultValue={title}/></td>
        <td><input type="text" className="form-control" defaultValue={amount}/></td>
        <td>
          <button className="btn btn-info mr-3 btn-action">Update</button>
          <button className="btn btn-danger btn-action" onClick={this.handleEditingToggle}>Cancel</button>
        </td>
      </tr>
    )
  }

  render() {
    const {edit} = this.state;

    if(edit) {
      return this.returnEditingRow()
    }
    return this.returnRecordRow()
  }
}

Record.propTypes = {
  id: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string,
  amount: PropTypes.number
};
