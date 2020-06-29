import React from 'react';
import { Component } from 'react';
import { getFlightList } from '../../axios/FlightAPI';
import { Flight } from '../components/Flight';
import { updateFlightId } from '../../actions/FlightAction';
import { connect } from 'react-redux';

export class FlightContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flightList: []
        }
    }
    componentDidMount() {
        let flightListData = getFlightList();
        flightListData.then(response => {
            //console.log(response.data);
            this.setState({ flightList: response.data });
        })
    }
    render() {

        return (
            <div>
                <Flight flightList={this.state.flightList} updateFlightId={flightId=>{this.props.updateFlightId(flightId)}} />
            </div>
        );
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        updateFlightId : (flightId) => dispatch(updateFlightId(flightId))
    }
}
export default connect(null, mapDispatchToProps)(FlightContainer)