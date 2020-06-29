import React from 'react';
import { Component } from 'react';
import { MDBModalHeader, MDBModalBody, MDBModalFooter, MDBBtn, MDBModal, MDBContainer, MDBCol, MDBRow, MDBInput } from 'mdbreact';
//import { Input } from 'reactstrap';

export class UpdatePassengerModal extends Component {
    state = {
        modal: false
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal 
        });
     
    }
    render() {
        
        
        return (
            <MDBContainer>
                <MDBBtn onClick={this.toggle}>Update</MDBBtn>
                <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                    <MDBModalHeader toggle={this.toggle}>Update Passenger Detail</MDBModalHeader>
                    <div>
                    <form
                    className="needs-validation"
                    noValidate
                    onSubmit={this.props.submitHandle}
                    >
                    <MDBModalBody>
                        <MDBRow>
                            <MDBCol md="6">
                                <MDBInput 
                                type="text" 
                                name="firstName" 
                                id="firstName" 
                                label= "First Name" 
                                value={this.props.passengerDetail.firstName}
                                onChange={this.props.changeHandle} 
                                ></MDBInput>
                            </MDBCol>
                            <MDBCol md="6">
                                <MDBInput
                                type="text"
                                name="lastName"
                                id="lastName"
                                label="Last Name"
                                value={this.props.passengerDetail.lastName}
                                onChange={this.props.changeHandle}
                                >
                                </MDBInput>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol md="6">
                                <MDBInput 
                                type="text"
                                name="mobileNo"
                                id="mobileNo"
                                label="Mobile No."
                                value={this.props.passengerDetail.mobileNo}
                                onChange={this.props.changeHandle}
                                disabled
                                required>
                                </MDBInput>
                            </MDBCol>
                            <MDBCol md="6">
                                <MDBInput 
                                type="text" 
                                name="dateOfBirth"
                                id="dateOfBirth"
                                label="Date Of Birth"
                                value={this.props.passengerDetail.dateOfBirth}
                                onChange={this.props.changeHandle}
                                ></MDBInput>
                            </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol md="6">
                                    <MDBInput
                                    type="text"
                                    name="passportNo"
                                    id="passportNo"
                                    label="Passport No"
                                    value={this.props.passengerDetail.passportNo}
                                    onChange={this.props.changeHandle}
                                    ></MDBInput>
                                </MDBCol>
                                <MDBCol md="6">
                                    <MDBInput
                                    type="text"
                                    name="address"
                                    id="address"
                                    label="Address"
                                    value={this.props.passengerDetail.address}
                                    onChange={this.props.changeHandle}
                                    ></MDBInput>
                                </MDBCol>
                            </MDBRow>
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
                        <MDBBtn color="primary" onClick={this.toggle} type="submit">Save changes</MDBBtn>
                    </MDBModalFooter>
                    </form>
                    </div>
                </MDBModal>
            </MDBContainer>
        );
    }
}
export default UpdatePassengerModal