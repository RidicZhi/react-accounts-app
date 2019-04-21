import React from 'react';

const AmountBox = ({ title, type , amount }) => {
  return (
    <div className="col amount-box">
      <div className="card">
        <div className={`card-header text-white bg-${type} text-center font-weight-bold`}>
          {title}
        </div>
        <div className="card-body text-center font-weight-bold text-secondary">
          {amount}
        </div>
      </div>
    </div>
  );
}

export default AmountBox;