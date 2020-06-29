import axios from 'axios';
import { PASSENGER_LIST_URL } from '../config/urls';

export const getPassengerList = async (flightId) => {
    return await axios.get(PASSENGER_LIST_URL, {params : {flightId : flightId}})
    .then(response => response.data);
}

export const createNewPassenger = async (data) => {
    return await axios.post(PASSENGER_LIST_URL, data)
    .then(response => response)
}

 export const updatePassengerDetail= async(id, data) =>{
     return await axios.patch(`${PASSENGER_LIST_URL}/${id}`, data)
     .then(response=>response);
 }

 export const updatePassengerSeatAndStatus = async (paxId, data) => {
    return axios.patch(`${PASSENGER_LIST_URL}/${paxId}`, data).then(response => response)
}