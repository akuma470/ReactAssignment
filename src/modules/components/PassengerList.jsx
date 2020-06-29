import React, { Component } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody, MDBRow, MDBContainer, MDBCol } from 'mdbreact';

export class PassengerList extends Component{
    render(){
       // console.log(this.props.passengerList);
       let isAdmin= this.props.isAdmin;
       const flightDetail= this.props.flightDetail;
        return(
            <>
            <div style={!isAdmin ? {display:""}: {display: "none"}}>
                <MDBContainer>
                    <MDBRow style={{marginTop : "3px"}}>
                        <MDBCol md="3"><b>AIRLINE :</b>{flightDetail.airline}</MDBCol>
                        <MDBCol md="3"><b>DEP STN :</b>{flightDetail.departureStation}</MDBCol>
                        <MDBCol md="4"><b>DEP DATE :</b>{String(flightDetail.departureDate).substring(0,10)}</MDBCol>
                        <MDBCol md="2"><b>TIME :</b>{String(flightDetail.departureDate).substring(11,16)}</MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md="3"><b>FlightNo :</b>{flightDetail.flightNo}</MDBCol>
                        <MDBCol md="3"><b>ARV STN :</b>{flightDetail.arrivalStation}</MDBCol>
                        <MDBCol md="4"><b>ARV DATE :</b>{String(flightDetail.arrivalDate).substring(0,10)}</MDBCol>
                        <MDBCol md="2"><b>TIME :</b>{String(flightDetail.arrivalDate).substring(11,16)}</MDBCol>
                    </MDBRow>
                    <div style={{ borderTopStyle: "solid", marginTop: "5px", paddingTop: "5px" }}></div>
                </MDBContainer>
            </div>
            
           <div style={isAdmin ? {display:""}: {display: "none"}}>
                    <MDBContainer style={{ borderBottomStyle: "solid", marginBottom: "15px", paddingTop: "5px" }}>
                        <MDBRow style={{
                            backgroundColor: 'black',
                            border: '2px solid black',
                            color: '#fff',
                            textAlign: 'center'
                        }}>
                            <MDBCol md="4"><input type="checkbox" id="NO_PASSPORT" onClick = {this.props.filterPassenger} /> <b>Without Passport</b></MDBCol>
                            <MDBCol md="4"><input type="checkbox" id="NO_ADDRESS" onClick = {this.props.filterPassenger}/> <b>No Address detail</b></MDBCol>
                            <MDBCol md="4"><input type="checkbox" id="NO_DOB" onClick = {this.props.filterPassenger} /> <b>No Date of Birth</b></MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </div>
            <form>
            <MDBTable responsive striped bordered hover size="sm" scrollY maxHeight="450px" >
                <MDBTableHead>
                    <tr>
                        <th></th>
                        <th>#</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Gender</th>
                        <th>Mobile No</th>
                        <th style={!isAdmin ? {display:""}: {display: "none"}}>Seat No</th>
                        <th style={!isAdmin ? {display:""}: {display: "none"}}>Status</th>
                        <th style={!isAdmin ? {display:""}: {display: "none"}}>Infant</th>
                        <th style={!isAdmin ? {display:""}: {display: "none"}}>WheelChair</th>
                        <th style={isAdmin ? {display:""}: {display: "none"}}>PassportNo</th>
                        <th style={isAdmin ? {display:""}: {display: "none"}}>Address</th>
                        <th style={isAdmin ? {display:""}: {display: "none"}}>DateOfBirth</th>

                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                        {this.props.passengerList.map(
                            (value, index) => {
                                return (
                                <tr style={String(value.id) === this.props.passengerId ? { backgroundColor: "rgba(255, 0, 255, 0.3)" } : null} key ={index}>
                                    <td><input type="radio" value={value.id} name="passenger" onChange={this.props.onChange}></input></td>
                                    <td>{index+1}</td>
                                    <td>{value.firstName}</td>
                                    <td>{value.lastName}</td>
                                    <td>{value.gender}</td>
                                    <td>{value.mobileNo}</td>
                                    <td style={!isAdmin ? {display:""}: {display: "none"}}>{value.seatNo}</td>
                                    <td style={!isAdmin ? {display:""}: {display: "none"}}>{value.status}</td>
                                    <td style={!isAdmin ? {display:""}: {display: "none"}}>{value.infant}</td>
                                    <td style={!isAdmin ? {display:""}: {display: "none"}}>{value.wheelChair}</td>
                                    <td style={isAdmin ? {display:""}: {display: "none"}}>{value.passportNo}</td>
                                    <td style={isAdmin ? {display:""}: {display: "none"}}>{value.address}</td>
                                    <td style={isAdmin ? {display:""}: {display: "none"}}>{value.dateOfBirth}</td>

                                </tr>)
                        }
                        )}
                </MDBTableBody>
            </MDBTable>
            </form>
            </>
        );
    }
}

export default PassengerList