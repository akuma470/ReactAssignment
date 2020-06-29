import React from 'react';
import { Component } from 'react';
import { MDBCardHeader, MDBCardBody, MDBAnimation, MDBIcon, MDBCard, MDBCol, MDBRow, MDBContainer } from 'mdbreact';

export class FlightDetail extends Component{
    render(){
       // console.log(this.props.flightDetail);
        return(
            <>
            <MDBCard >
            <MDBCardHeader tag="h3" className="text-center font-weight-bold text-uppercase py-4">
                    Flight Detail
            </MDBCardHeader>
            <MDBCardBody>
                <MDBAnimation type='bounce'>
            <MDBContainer style={{borderStyle :"solid" , padding :"5px"  }}>
                        <MDBRow>
                            <MDBCol sm="6"><b>AIRLINE:</b>{this.props.flightDetail.airline}</MDBCol>
                            <MDBCol sm="6"><b>FLIGHT NO :</b>{this.props.flightDetail.flightNo}</MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol sm="6"><b>DEP STN :</b>{this.props.flightDetail.departureStation}<MDBIcon icon="plane-departure" /></MDBCol>
                            <MDBCol sm="6"><b>ARV STN :</b>{this.props.flightDetail.arrivalStation}<MDBIcon icon="plane-arrival" /></MDBCol>
                        </MDBRow>
                        <MDBRow>
                        <MDBCol sm="12"><b>DEP DATE :</b>{String(this.props.flightDetail.departureDate).substring(0, 10)}</MDBCol>
                            
                        </MDBRow>
                        <MDBRow>
                        <MDBCol sm="12"><b>ARV DATE :</b>{String(this.props.flightDetail.arrivalDate).substring(0, 10)}</MDBCol>
                            
                        </MDBRow>
                        <MDBRow>
                        <MDBCol sm="6"><b>DEP TIME :</b>{String(this.props.flightDetail.arrivalDate).substring(11, 16)}</MDBCol>
                            <MDBCol sm="6"><b>ARV TIME :</b>{String(this.props.flightDetail.arrivalDate).substring(11, 16)}</MDBCol>
                        </MDBRow>
                    </MDBContainer> 
                    </MDBAnimation>
                    </MDBCardBody>
                    </MDBCard>
            </>
        );
    }
}
export default FlightDetail