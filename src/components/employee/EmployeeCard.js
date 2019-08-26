import React, { Component } from 'react';

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Name: <span className="card-employeename">{this.props.employee.name}</span></h3>
          <p>Info: {this.props.employee.info}</p>
          <button type="button" onClick={() => this.props.deleteEmployee(this.props.employee.id)}>You're Fired!</button>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;