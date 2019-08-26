import React, { Component } from 'react';

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Name: <span className="card-ownername">Owner Name</span></h3>
          <p>Info</p>
        </div>
      </div>
    );
  }
}

export default OwnerCard;