import React, { Component } from 'react';
import { MDBCardHeader, MDBCard, MDBCardBody, MDBTable, MDBTableHead, MDBTableBody } from 'mdbreact';
import { Link } from 'react-router-dom';



export class Flight extends Component {

    render() {
        //console.log(this.props.flightList);
        return (
            <>
                <MDBCard>
                    <MDBCardBody>
                        <MDBCardHeader className="text-center font-weight-bold text-uppercase py-2">
                            <h3>Flight List</h3>
                        </MDBCardHeader>
                        <MDBTable striped responsive bordered small scrollY hover>
                            <MDBTableHead>
                                <tr>
                                    <th>#</th>
                                    <th>Airline</th>
                                    <th>FlightNo</th>
                                    <th>Departure</th>
                                    <th>Arrival</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th></th>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                                {this.props.flightList.map(
                                    (value, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{value.airline}</td>
                                            <td>{value.flightNo}</td>
                                            <td>{value.departureStation}</td>
                                            <td>{value.arrivalStation}</td>
                                            <td>{value.departureDate.substring(0, 10)}</td>
                                            <td>{value.departureDate.substring(11, 16)}</td>
                                            <td><Link to = "/CheckIn" style = {{color : 'blue'}} onClick={()=>this.props.updateFlightId(value.id)}>Assign</Link></td>
                                        </tr>
                                    ),
                                )}
                            </MDBTableBody>
                        </MDBTable>
                    </MDBCardBody>
                </MDBCard>
            </>
        );
    }
}
export default Flight