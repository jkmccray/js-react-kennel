import React, { Component } from "react"

class Login extends Component {

  // Set initial state
  state = {
    email: "",
    password: "",
    rememberMe: false
  }

  // Update state whenever an input field is edited
  handleFieldChange = (evt) => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  handleLogin = (e) => {
    e.preventDefault()
    /*
        For now, just store the email and password that
        the customer enters into local storage.
    */
   if (this.state.rememberMe) {
     localStorage.setItem(
       "credentials",
       JSON.stringify({
         email: this.state.email,
         password: this.state.password
       })
     )
    } else {
       sessionStorage.setItem(
         "credentials",
         JSON.stringify({
           email: this.state.email,
           password: this.state.password
         })
       )

   }
    this.props.history.push("/home");

  }

  checkRememberMe = (event) => {
    if (event.target.checked) {
      this.setState({ rememberMe: true })
    } else if (!event.target.checked) {
      this.setState({ rememberMe: false })
    }
  }

  render() {
    return (
      <form onSubmit={this.handleLogin}>
        <fieldset>
          <h3>Please sign in</h3>
          <div className="formgrid">
            <input onChange={this.handleFieldChange} type="email"
              id="email"
              placeholder="Email address"
              required="" autoFocus="" />
            <label htmlFor="inputEmail">Email address</label>

            <input onChange={this.handleFieldChange} type="password"
              id="password"
              placeholder="Password"
              required="" />
            <label htmlFor="inputPassword">Password</label>
          </div>
          <button type="submit">
            Sign in
            </button>
        </fieldset>
        <label htmlFor="remember-me">Remember Me</label>
        <input onChange={this.checkRememberMe} id="remember-me" type="checkbox" name="remember-me" />
        {/* value={this.state.rememberMe} checked={this.state.rememberMe === true ? true : false} */}
      </form>
    )
  }

}

export default Login