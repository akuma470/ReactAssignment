export const updateFlightId = (flightId) => {
    const UPDATE_FLIGHT_ID = 'UPDATE_FLIGHT_ID';
    console.log('FlightId val ' + flightId);
    return {
        type: UPDATE_FLIGHT_ID,
        payload: { flightId}
    }
}

export const removeFlightId = () => {
    const REMOVE_FLIGHT_ID = 'REMOVE_FLIGHT_ID';
    return{
        type : REMOVE_FLIGHT_ID
    }
}