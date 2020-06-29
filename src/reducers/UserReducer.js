const initialState = {
    role: '',
    token: '',
    userName: '',
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_USER_DETAIL': {
            return {
                ...state,
                role: action.payload.role,
                userName: action.payload.userName,
                token: action.payload.token,
            };
        }
        case 'REMOVE_USER_DETAIL': {
            return {
                ...state,
                role: '',
                userName: '',
                token: '',
            };
        }
        default :
            return state
    }
};

export default userReducer