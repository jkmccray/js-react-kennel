import React, { Component } from 'react';
import OwnerManager from '../../modules/OwnerManager';
// import './OwnerForm.css'

class OwnerForm extends Component {
    state = {
        ownerName: "",
        phone_number: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create owner      object, invoke the OwnerManager post method, and redirect to the full Owner list
    */
    constructNewOwner = evt => {
        evt.preventDefault();
        if (this.state.ownerName === "" || this.state.phone_number === "") {
            window.alert("Please input an owner name and phone number");
        } else {
            this.setState({ loadingStatus: true });
            const owner = {
                name: this.state.ownerName,
                phone_number: this.state.phone_number,
            };

            // Create the owner and redirect user to owner list
            OwnerManager.post(owner)
            .then(() => this.props.history.push("/owners"));
        }
    };

    render(){

        return(
            <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="ownerName"
                        placeholder="Owner name"
                        />
                        <label htmlFor="ownerName">Name</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="phone_number"
                        placeholder="Phone Number"
                        />
                        <label htmlFor="phone_number">Phone Number</label>
                    </div>
                    <div className="alignRight">
                        <button
                        type="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.constructNewOwner}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
        )
    }
}

export default OwnerForm