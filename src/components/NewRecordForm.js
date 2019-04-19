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
    let name, obj;
    name = e.target.name;

    this.setState((
      obj={},
      obj["" + name] = e.target.value,
      obj)
    )
  }

  render() {
    const { date, title, amount } = this.state;

    return (
      <form className="form-inline my-4 justify-content-center">
        <div className="form-group">
          <input type="text" className="form-control" onChange={this.handleChange} placeholder="Date" name="date" value={date}/>
        </div>
        <div className="form-group">
          <input type="text" className="form-control" onChange={this.handleChange} placeholder="Title" name="title" value={title}/>
        </div>
        <div className="form-group">
          <input type="text" className="form-control" onChange={this.handleChange} placeholder="Amount" name="amount" value={amount}/>
        </div>
        <button type="submit" className="btn btn-primary" disabled={!this.buttonValid()}>Create Record</button>
      </form>
    );
  }
}
