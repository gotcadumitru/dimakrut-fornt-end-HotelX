// import * as axios from 'axios';

import axios from "axios"

export const ApartamentsAPI = {
    async getApartments( numberOfApatments = 6) {
        let response = await axios.get(`https://quiet-wildwood-41923.herokuapp.com/http://atc2021.bfg-e.tech/count=${numberOfApatments}`)
        return response.data
    },
}

export const authAPI = {
    async getUserData(email,password) {
        const resp = await axios.get(`https://quiet-wildwood-41923.herokuapp.com/http://atc2021.bfg-e.tech/api/getUserData/?email=${email}&parola=${password}`)

            
        return resp;
    },
    async register(email, password,  nume,prenume ) {
        const resp = await axios.get(`https://quiet-wildwood-41923.herokuapp.com/http://atc2021.bfg-e.tech/api/register/?email=${email}&parola=${password}&nume=${nume}&prenume=${prenume}`);
        return resp
    },
    async login(email, password ) {
        // debugger
        const resp = await axios.get(`https://quiet-wildwood-41923.herokuapp.com/http://atc2021.bfg-e.tech/api/checkUser?email=${email}&parola=${password}`)
        return resp.data;
    },
}
export const roomAPI = {

    async getRooms() {

        const resp = await axios.get(`https://quiet-wildwood-41923.herokuapp.com/http://atc2021.bfg-e.tech/api/rooms/data/all`)
        return resp.data;
       
    },
    async getOneRoom(roomId) {
        const resp = await axios.get(`https://quiet-wildwood-41923.herokuapp.com/http://atc2021.bfg-e.tech/api/rooms/data/${roomId}`);
        return resp.data;

    },
}
