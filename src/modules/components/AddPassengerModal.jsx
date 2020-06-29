import React from 'react';
import { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter, MDBRow, MDBCol, MDBInput } from 'mdbreact';
import { Input, Label } from 'reactstrap';

export class AddPassengerModal extends Component {
  state = {
    modal: false
  }
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }
  render() {
    const {firstName, lastName, mobileNo} = this.props.passengerState;
    let isAddBtnEnable = (firstName.length >0 && lastName.length>0 && mobileNo.length===10);
    return (
      <MDBContainer>
        <MDBBtn onClick={this.toggle}>Create</MDBBtn>
        <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
          <MDBModalHeader toggle={this.toggle}>New Passenger Details</MDBModalHeader>
          <MDBModalBody>
            <form className="needs-validation" onSubmit={this.props.submitHandler}>
              <MDBRow>
                <MDBCol md="6">
                  <MDBInput
                    label="First name"
                    type="text"
                    name="firstName"
                    id="fname"
                    onChange={this.props.changeHandler}
                    required>
                    <div className="valid-feedback">Looks good!</div>
                  </MDBInput>
                </MDBCol>

                <MDBCol md="6">
                  <MDBInput
                    label="Last name"
                    type="text"
                    name="lastName"
                    id="lname"
                    onChange={this.props.changeHandler}
                    required>
                    <div className="valid-feedback">Looks good!</div>
                  </MDBInput>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="6">
                  <MDBInput
                    label="Mobile"
                    type="number"
                    name="mobileNo"
                    id="mobile_no"
                    onChange={this.props.changeHandler}
                  >
                  </MDBInput>
                </MDBCol>

                <MDBCol md="6">
                  <MDBInput
                    label="Passport"
                    type="text"
                    name="passportNo"
                    id="passoprt_no"
                    onChange={this.props.changeHandler}
                  >
                  </MDBInput>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="6">
                  <MDBInput
                    label="Address"
                    type="text"
                    name="address"
                    id="address"
                    onChange={this.props.changeHandler}>
                  </MDBInput>
                </MDBCol>

                <MDBCol md="6">
                  <MDBInput
                    label="Date of Birth"
                    type="text"
                    name="dateOfBirth"
                    id="dob"
                    onChange={this.props.changeHandler}>
                  </MDBInput>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="6">
                  <MDBRow>
                    <MDBCol md="5">Gender :</MDBCol>
                    <MDBCol md="3">
                      <Input
                        type="radio"
                        value="Male"
                        id="radio1"
                        checked={this.props.passengerState.gender === "Male"}
                        onChange={this.props.genderSelect}>
                      </Input>
                      <Label>Male</Label>
                    </MDBCol>
                    <MDBCol md="4">
                      <Input
                        type="radio"
                        value="Female"
                        id="radio1"
                        checked={this.props.passengerState.gender === "Female"}
                        onChange={this.props.genderSelect}
                      >
                      </Input>
                      <Label>Female</Label></MDBCol>
                  </MDBRow>
                </MDBCol>
                <MDBCol md="6">
                  <MDBRow>
                    <MDBCol md="6">
                      <MDBInput
                        style={{ width: "15px", marginTop: "-0.5rem" }}
                        label="Infant"
                        type="checkbox"
                        id="infant"
                        onClick={this.props.hasInfant} />
                    </MDBCol>
                    <MDBCol md="6">
                      <MDBInput
                        style={{ width: "15px", marginTop: "-0.5rem" }}
                        label="WheelChair"
                        type="checkbox"
                        id="wheelChair"
                        onClick={this.props.wheelChairAccess} />
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
              </MDBRow>
              <MDBModalFooter>
                <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
                <MDBBtn color="primary" type="submit" onClick={this.toggle} disabled={!isAddBtnEnable}>Add</MDBBtn>
              </MDBModalFooter>
            </form>
          </MDBModalBody>
        </MDBModal>
      </MDBContainer>

    );
  }
}
export default AddPassengerModal