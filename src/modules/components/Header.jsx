import React from 'react';
import { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBIcon, MDBNavItem, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavLink }
    from 'mdbreact';
import { connect } from 'react-redux';
import { removeFlightId } from '../../actions/FlightAction';

export class Header extends Component {
    state = {
        isOpen: false
    };
    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }
    home = () => {
       // console.log(this.props.flightId);
        if (this.props.flightId)
        return(
            <MDBNavItem>
                <MDBNavLink to="/Home" onClick={() => this.props.removeFlightId()}>Home</MDBNavLink>
            </MDBNavItem>
        )
    }
    checkIn = () =>{
        //if(this.props.flightId)
        return(
            <MDBNavItem active>
                <MDBNavLink to="/checkin">Check-In</MDBNavLink>
            </MDBNavItem>
        )
    }
    render() {
        //console.log(this.props.userName);
        let userName = this.props.userName;
        let role = this.props.role;
        if (role === null) {
            role = 'staff'
          }

        return (
            <>
                <MDBNavbar color="default-color" dark expand="md">
                    <MDBNavbarBrand>
                        <strong className="white-text">Scan your fly </strong>
                        <MDBIcon icon="fas fa-plane"></MDBIcon>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick={this.toggleCollapse} />
                    <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                        <MDBNavbarNav left>
                            {this.home()}
                            {role!== "admin" && this.props.flightId ? this.checkIn() : <></>}
                        </MDBNavbarNav>
                        <MDBNavbarNav right>
                            <MDBNavItem>
                                <MDBDropdown>
                                    <MDBDropdownToggle nav caret>
                                        <MDBIcon icon="user" className="mr-1" />{userName + "(" + role + ")"}
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu className="dropdown-default" right>
                                        <MDBDropdownItem href="/Logout">Logout</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBNavbar>
            </>
        );
    }
}
const mapStateToProps = state => {
    return {
        userName: state.user.userName,
        role: state.user.role,
        flightId : state.flight.flightId


    }
}
const dispatchStateToProps = dispatch => {
    return {
        removeFlightId: () => dispatch(removeFlightId())
    }
}
export default connect(mapStateToProps, dispatchStateToProps)(Header)