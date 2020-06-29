import React from 'react';
import { Component } from 'react';
import { MDBContainer, MDBRow, MDBCard, MDBCol } from 'mdbreact';

export class SeatMapInformation extends Component{
    render(){
        return(
            <MDBContainer>
                    <MDBCard>
                    <MDBRow>
                        <MDBCol style={{textAlign : "center", marginTop: "15px", marginBottom:"15px"}}>
                        <h5><b>SEAT MAP</b></h5>
                        </MDBCol>
                    </MDBRow>
                    </MDBCard>
                    <MDBCard>
                        <MDBRow>
                            <MDBCol size="4">
                                <div className="seatInfo"  style={{backgroundColor: "#45cafc"}}><label className="labelText">BOOKED</label></div>
                                
                            </MDBCol>
                            <MDBCol size="8">
                                <div className="seatInfo" style={{ backgroundColor: "green" }}><label className="labelText">BOOKED WITH W/C AND INF</label></div>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol  md="4">
                                <div className="seatInfo" style={{backgroundColor: "rgba(255, 255, 71, 0.2)"}}><label className="labelText">AVAILABLE</label></div>
                            </MDBCol>
                            <MDBCol md="8">
                                <div className="seatInfo" style={{ backgroundColor: "red" }}><label className="labelText">BOOKED WITH W/C</label></div>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol  md="4">
                                <div className="seatInfo" style={{ backgroundColor: "rgba(255, 0, 255, 0.3)" }}><label className="labelText">MODIFY</label></div>
                            </MDBCol>
                            <MDBCol md="8">
                                <div className="seatInfo" style={{ backgroundColor: "blue" }}><label className="labelText">BOOKED WITH INF</label></div>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <p style={{color:"red" , marginLeft:"15px", fontSize:"x-small"}}>*Select passenger to enable SeatMap</p>
                        </MDBRow>
                    </MDBCard>
                </MDBContainer>
        );
}
}
export default SeatMapInformation