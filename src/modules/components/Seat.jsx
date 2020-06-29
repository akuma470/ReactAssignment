import React, { Component } from 'react';
import {MDBIcon} from 'mdbreact';


export class Seat extends Component{
    render(){
        let seatId=this.props.value;
        let key = this.props.disableSeat;
        let seat = '';

        switch(key){
            case 'DISABLED' : seat=(<div className ="seat" id= {seatId} onClick={this.props.onClick} style={{ backgroundColor: "gray", pointerEvents:"none"}}>
                <MDBIcon icon="ban" className="black-text"/></div>);
                break;
            case 'MODIFY' : seat=(<div className ="seat" id= {seatId} onClick={this.props.onClick} style={{ backgroundColor: "rgba(255, 0, 255, 0.3)" }}>
                <MDBIcon icon="user-check" /></div>);
                break;
            case 'ACCEPTED' : seat=(<div className ="seat" id= {seatId} onClick={this.props.onClick} style={{ backgroundColor: "#45cafc", pointerEvents:"none"}}>
                <MDBIcon icon="user-alt" /></div>);
                break;
            case 'ACCEPTED WITH WHEELCHAIR INFANT' : seat=(<div className ="seat" id= {seatId} onClick={this.props.onClick} disabled style={{ backgroundColor: "green", pointerEvents:"none" }}>
                <MDBIcon fab icon="accessible-icon" className="white-text"/></div>);
                break;
            case 'ACCEPTED WITH WHEELCHAIR' : seat=(<div className ="seat" id= {seatId} onClick={this.props.onClick} disabled style={{ backgroundColor: "red", pointerEvents:"none" }}>
                <MDBIcon icon="wheelchair" /></div>);
                break;
            case 'ACCEPTED WITH INFANT' : seat=(<div className ="seat" id= {seatId} onClick={this.props.onClick} disabled style={{ backgroundColor: "blue", pointerEvents:"none" }}>
                <MDBIcon icon="baby" className="yellow-text" /></div>);
                break;
            default :
            seat=(<div className ="seat" id= {seatId} onClick={this.props.onClick} style={{ backgroundColor: "rgba(255, 255, 71, 0.2)" }}></div>); 
            
        }
        return seat;
            
        
           
    
       
    }
}
export default Seat