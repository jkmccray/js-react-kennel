import React, { Component } from 'react';

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Name: <span className="card-locationname">Address</span></h3>
          <address>Address</address>
        </div>
      </div>
    );
  }
}

export default LocationCard;