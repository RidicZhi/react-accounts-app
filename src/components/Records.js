import React, { Component } from 'react';
import Record from './Record';
import axios from 'axios';

class Records extends Component {
  constructor(props) {
    super(props);
    this.state = {
      records: [],
      error: null,
      isLoaded: false,
    }
  }

  componentDidMount() {
    axios.get("https://5cb5bfa207f233001424d6c5.mockapi.io/api/v1/records").then(
      res => {
        this.setState({
          records: res.data,
          isLoaded: true
        })
      }
    ).catch(
      error => {
        this.setState({
          error,
          isLoaded: true
        })
      }
    )
  }

  render() {
    const { records, error, isLoaded } = this.state;

    if(error) {
      return (<div className="loading-message loading-error-message">Error: {error.message}</div>)
    }else if(!isLoaded) {
      return (<div className="loading-message">Loading...</div>)
    }
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
            {records.map((record) => 
              <Record 
                key={record.id}
                {...record}
                />)}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Records;
