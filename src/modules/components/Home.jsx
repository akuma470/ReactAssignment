import React, { Component } from 'react';
import Header from './Header';
import FlightContainer from '../container/FlightContainer';

export class Home extends Component {
    //constructor(props){
    //   super(props);
    //const token =localStorage.getItem("role");
    //this.state={
    // token
    // }
    //console.log(token);
    //}
    render() {
        return (
            <div>
                <Header />
                
                <FlightContainer />
            </div>
        );
    }
}


export default (Home)