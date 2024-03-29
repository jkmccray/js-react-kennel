import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import AnimalList from './animal/AnimalList'
import AnimalDetail from './animal/AnimalDetail'
import AnimalForm from './animal/AnimalForm'
import LocationList from './location/LocationList'
import LocationDetail from './location/LocationDetail'
import LocationForm from './location/LocationForm'
import EmployeeList from './employee/EmployeeList'
import EmployeeForm from './employee/EmployeeForm'
import OwnerList from './owner/OwnerList'
import OwnerForm from './owner/OwnerForm'
import Login from './auth/Login'


class ApplicationViews extends Component {

  isAuthenticated = () => localStorage.getItem("credentials") !== null || sessionStorage.getItem("credentials") !== null

  render() {
    return (
      <React.Fragment>
        <Route path="/login" component={Login} />
        <Route exact path="/home" render={(props) => {
          return this.isAuthenticated()
          ? <Home {...props} />
          : <Redirect to="/login" />
        }} />
        <Route exact path="/" render={(props) => {
          return !this.isAuthenticated()
          ? <Login {...props} />
          : <Redirect to="/home" />
        }} />
        <Route exact path="/animals" render={(props) => {
          return this.isAuthenticated()
          ? <AnimalList {...props} />
          : <Redirect to="/login" />
        }} />
        <Route path="/animals/:animalId(\d+)" render={(props) => {
          // Pass the animalId to the AnimalDetailComponent
          return <AnimalDetail
          animalId={parseInt(props.match.params.animalId)}
          {...props}
          />
        }} />
        <Route path="/animals/new" render={(props) => {
          return <AnimalForm {...props} />
        }} />
        {/*
          This is a new route to handle a URL with the following pattern:
          http://localhost:3000/animals/1

          It will not handle the following URL because the `(\d+)`
          matches only numbers after the final slash in the URL
          http://localhost:3000/animals/jack
        */}
        <Route exact path="/locations" render={(props) => {
        return this.isAuthenticated()
          ? <LocationList {...props} />
          : <Redirect to="/login" />
        }} />
        <Route path="/locations/:locationId(\d+)" render={(props) => {
          // Pass the locationId to the LocationDetailComponent
          return <LocationDetail
          locationId={parseInt(props.match.params.locationId)}
          {...props} />
        }} />
        <Route path="/locations/new" render={(props) => {
          return <LocationForm {...props} />
        }} />
        <Route exact path="/employees" render={(props) => {
        return this.isAuthenticated()
          ? <EmployeeList {...props} />
          : <Redirect to="/login" />
        }} />
        <Route path="/employees/new" render={(props) => {
          return <EmployeeForm {...props} />
        }} />
        <Route exact path="/owners" render={(props) => {
        return this.isAuthenticated()
          ? <OwnerList {...props} />
          : <Redirect to="/login" />
        }} />
        <Route path="/owners/new" render={(props) => {
          return <OwnerForm {...props} />
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews