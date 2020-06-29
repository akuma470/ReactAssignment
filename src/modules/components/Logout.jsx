import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeUserDetail } from '../../actions/UserAction';
import { removeFlightId } from '../../actions/FlightAction'; 
import { MDBView, MDBMask } from 'mdbreact';

export class Logout extends Component{
    //constructor(props){
     //   super(props);
     //   localStorage.removeItem("role");
    //}
    render(){
        this.props.removeUserDetail();
        this.props.removeFlightId();

        return(
            <>
               <MDBView src="https://mdbootstrap.com/img/Photos/Others/images/31.jpg">
               <MDBMask overlay="white-slight" className="flex-top flex-column text-white text-center">
                <h1>Thankyou for visiting us.</h1>
                <h3>Login Again ? <Link to="/">Click here</Link> </h3>
                
                </MDBMask>
                </MDBView>
                </>
        );
    }

}
const mapDispatchToProps =  dispatch => {
    return{
        removeUserDetail : () => dispatch(removeUserDetail()),
        removeFlightId : () => dispatch(removeFlightId())

    }
    
}

export default connect(null, mapDispatchToProps)(Logout)
