import React, { Component } from "react";

export default class NewRecordForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      title: "",
      amount: "",
    };
    
    this.handleChange=this.handleChange.bind(this);
  }

  buttonValid() {
    const { date, title, amount } = this.state;
    
    return !!(date && title && amount)
  }

  handleChange(e) {
    const {name, value} = e.target;

    this.setState({
      [name]: value
    })
  }

  render() {
    const { date, title, amount } = this.state;

    return (
      <form className="form-row my-4 justify-content-center">
        <div className="col-2 mr-4">
          <input type="text" className="form-control" onChange={this.handleChange} placeholder="Date" name="date" value={date}/>
        </div>
        <div className="col-3 mr-4">
          <input type="text" className="form-control" onChange={this.handleChange} placeholder="Title" name="title" value={title}/>
        </div>
        <div className="col-2 mr-3">
          <input type="text" className="form-control" onChange={this.handleChange} placeholder="Amount" name="amount" value={amount}/>
        </div>
        <div >
          <button type="submit" className="btn btn-primary" disabled={!this.buttonValid()}>Create Record</button>
        </div>
      </form>
    );
  }
}
