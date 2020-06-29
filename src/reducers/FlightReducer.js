const initialState = {
    flightId : null

};

export const flightReducer = (state = initialState, action) => {
    switch(action.type){
        case 'UPDATE_FLIGHT_ID' : {
            return{
                ...state,
                flightId : action.payload.flightId

            };
        }
        case 'REMOVE_FLIGHT_ID' : {
            return{
                ...state,
                flightId : null
            };
        }
            default : return state
    };
}
export default flightReducer