import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { GoogleLogin } from 'react-google-login';




export class Login extends Component {


    render() {

        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="6">
                        <MDBCard>
                        <form>
                            <div className="header pt-3 default-color">
                                <MDBRow className="d-flex justify-content-center">
                            <h3 className="white-text mb-3 pt-3 font-weight-bold">Sign in</h3>
                            </MDBRow>
                            </div>
                            <MDBCardBody>
                            <div className="grey-text">
                                <MDBInput label="Type your email" name="email" icon="envelope" group type="email" validate error="wrong" onChange={this.props.onChange}
                                    success="right" />
                                <MDBInput label="Type your password" name="password" icon="lock" group type="password" validate onChange={this.props.onChange} />
                            </div>
                            <div className="text-center">
                                <MDBBtn onClick={this.props.handleLogin}>Login</MDBBtn>
                                <GoogleLogin
                                    clientId="769432167633-k5qb3p2s29cintlcbj0c6a4vtrta5h2a.apps.googleusercontent.com"
                                    buttonText="Login with Google"
                                    onSuccess={this.props.googleLoginSuccess}
                                    onFailure={this.props.googleLoginFailure}
                                />
                            </div>
                            </MDBCardBody>
                        </form>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    }
}

export default Login