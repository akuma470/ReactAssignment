import React from 'react';
import { Component } from 'react';
import { MDBContainer, MDBCard } from 'mdbreact';
import Seat from '../components/Seat';
import SeatMapInformation from './SeatMapInformation';




export class SeatMap extends Component {
    render() {
        let seats= this.props.seats;
        var seatMap = [];
        let row = 1;
        for (let seatIndex = 0; seatIndex < 120; seatIndex += 6)
            seatMap.push(<tr key={row}>
                <td>{row++}</td>
                <td><Seat value={seatIndex} disableSeat={seats[seatIndex]} onClick={this.props.seatHandleClick}></Seat></td>
                <td><Seat value={seatIndex + 1} disableSeat={seats[seatIndex + 1]} onClick={this.props.seatHandleClick}></Seat></td>
                <td><Seat value={seatIndex + 2} disableSeat={seats[seatIndex + 2]} onClick={this.props.seatHandleClick}></Seat></td>
                <td className="walk"></td>
                <td><Seat value={seatIndex + 3} disableSeat={seats[seatIndex + 3]} onClick={this.props.seatHandleClick}></Seat></td>
                <td><Seat value={seatIndex + 4} disableSeat={seats[seatIndex + 4]} onClick={this.props.seatHandleClick}></Seat></td>
                <td><Seat value={seatIndex + 5} disableSeat={seats[seatIndex + 5]} onClick={this.props.seatHandleClick}></Seat></td>
            </tr>);
        return (
            <div>
                <SeatMapInformation></SeatMapInformation>
                <MDBContainer>
                    <MDBCard>
                        <div className="seatMapDiv">
                            <table>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>A</th>
                                        <th>B</th>
                                        <th>C</th>
                                        <th></th>
                                        <th>D</th>
                                        <th>E</th>
                                        <th>F</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {seatMap}
                                </tbody>

                            </table>
                        </div>

                    </MDBCard>

                </MDBContainer>
            </div>
        );
    }
}
export default SeatMap