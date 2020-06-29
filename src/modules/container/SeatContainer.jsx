import React, { Component } from 'react';
import SeatMap from '../components/SeatMap';


export class SeatContainer extends Component{
    render(){
        const bookedSeat = this.props.bookedSeat;
        let seats = null;
        if (this.props.passengerId === '') {
            seats = Array(120).fill('DISABLED');
        } else {
            seats = Array(120).fill(null);
            for (let i = 0; i < bookedSeat.length; i++) {
                seats[bookedSeat[i].seatNo] = 'ACCEPTED';
                if (String(bookedSeat[i].wheelChair) === "Yes" && String(bookedSeat[i].infant) === "Yes") {
                    seats[bookedSeat[i].seatNo] = 'ACCEPTED WITH WHEELCHAIR INFANT';
                } else if (String(bookedSeat[i].wheelChair) === "Yes") {
                    seats[bookedSeat[i].seatNo] = 'ACCEPTED WITH WHEELCHAIR';
                } else if (String(bookedSeat[i].infant) === "Yes") {
                    seats[bookedSeat[i].seatNo] = 'ACCEPTED WITH INFANT';
                }
                if (String(bookedSeat[i].paxId) === this.props.passengerId) {
                    seats[bookedSeat[i].seatNo] = 'MODIFY'
                }
            }
        }
        return(
            <>
            <SeatMap seatHandleClick={this.props.seatHandleClick}
            passengerId={this.props.selectedPaxId}
            bookedSeat={this.props.seatMap}
            seats={seats}
            >

            </SeatMap>
            </>
        );
    }
}
export default SeatContainer