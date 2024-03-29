import React, { Component } from 'react';
import LocationManager from '../../modules/LocationManager';
import './LocationDetail.css'
import NoLongerAvailable from '../NoLongerAvailable'


class LocationDetail extends Component {

  state = {
    name: "",
    address: "",
    loadingStatus: true,
  }

  componentDidMount() {
    console.log("LocationDetail: ComponentDidMount");
    //get(id) from LocationManager and hang on to the data; put it into state
    LocationManager.get(this.props.locationId)
      .then((location) => {
        if (location.name && location.address) {
          this.setState({
            name: location.name,
            address: location.address,
            loadingStatus: false
          });
        }
      });
  }

  handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    this.setState({ loadingStatus: true })
    LocationManager.delete(this.props.locationId)
      .then(() => this.props.history.push("/locations"))
  }

  render() {
    if (this.state.name === "" || this.state.breed === "") {
      return (<NoLongerAvailable />)
    } else if (this.state.name && this.state.breed) {
      return (
        <div className="card">
          <div className="card-content">
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
            <p>Address: {this.state.address}</p>
          </div>
          <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Close Location</button>
        </div>
      );
    }
  }
}

export default LocationDetail;