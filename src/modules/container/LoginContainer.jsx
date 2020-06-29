import React, { Component } from 'react';
import Login from '../components/Login';
import { Redirect } from 'react-router-dom';
import { authenticateUser } from '../../axios/LoginAPI';
import { updateUserDetail } from '../../actions/UserAction';
import { connect } from 'react-redux';

export class LoginContainer extends Component{
    constructor(props) {
        super(props);
        let loggedIn = false;
        let error = '';
        this.state = {
            loggedIn, error 
        }
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
        //console.log(this.state);
    }

    handleLogin=()=> {
           //localStorage.setItem("token", "sdfgssgjsksjks");
           //this.setState({ loggedIn: true })
           let userDetail = authenticateUser(this.state.email, this.state.password);
           userDetail.then(user => {
            if (user.length === 1) {
                 //localStorage.setItem("role",user[0].role);
                 //console.log(user[0].role);
                 this.props.updateUserDetail(user[0].role, user[0].firstName);
                 this.setState({
                    loggedIn: true,
                    //role:user[0].role
                 })
                console.log('login successful');
            } else {
                 //this.setState({
                    // error: 'Login failed'
                // })
                console.log('login failed');
                
            }
        })
                
        }
        googleLoginSuccess=(response)=>{
            //console.log(response);
            
        }
        googleLoginFailure=(response)=>{
            //console.log(response);
        }
   
    render(){
        
        if (this.state.loggedIn) {
            return <Redirect to='/Home'/>
         }
        return(
            <div>
                <Login handleLogin={() => this.handleLogin()} onChange={(event) => this.onChange(event)} 
                googleLoginSuccess={this.googleLoginSuccess()}
                googleLoginFailure={this.googleLoginFailure()}
                />
            </div>
                
        );
    }
}
const mapStateToProps = state => {
    //console.log(state);
    return {
        userName : state.user.userName,
        role     : state.user.role,
        token    : state.user.token
    }
}
const mapDispatchToProps = dispatch => {
    return {
        updateUserDetail : (role,userName)=> dispatch(updateUserDetail(role,userName,"UserToken"))
    }
}


 export default connect(mapStateToProps, mapDispatchToProps) (LoginContainer)