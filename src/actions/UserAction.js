export const updateUserDetail = (role, userName, token) => {
    const UPDATE_USER_DETAIL = 'UPDATE_USER_DETAIL';

    return {
        type: UPDATE_USER_DETAIL,
        payload: { role, userName, token }
    }
}

export const removeUserDetail = () => {
    const REMOVE_USER_DETAIL = 'REMOVE_USER_DETAIL';
    return{
        type : REMOVE_USER_DETAIL
    }
}

export default updateUserDetail