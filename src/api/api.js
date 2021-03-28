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
    async logout() {
        return await axios.delete(`/api/login`);
    }
}
export const roomAPI = {

    async getRooms() {

        const resp = await axios.get(`https://quiet-wildwood-41923.herokuapp.com/http://atc2021.bfg-e.tech/api/rooms/avable/all`)
        return resp.data;
        // return [ {
        //     categorie: 0,
        //     imageUrl: 'https://cf.bstatic.com/images/hotel/max1024x768/240/240113283.jpg',
        //     id: 1,
        //   },
        //   {
        //     categorie: 2,
        //     imageUrl: 'https://cf.bstatic.com/images/hotel/max1024x768/240/240113283.jpg',
        //     id: 2,
        //   },
        //   {
        //     categorie: 0,
        //     imageUrl: 'https://cf.bstatic.com/images/hotel/max1024x768/240/240113283.jpg',
        //     id: 3,
        //   },
        //   {
        //     categorie: 1,
        //     imageUrl: 'https://cf.bstatic.com/images/hotel/max1024x768/240/240113283.jpg',
        //     id: 4,
        //   },
        //   {
        //     categorie: 2,
        //     imageUrl: 'https://cf.bstatic.com/images/hotel/max1024x768/240/240113283.jpg',
        //     id: 5,
        //   },]
       
    },
    async login(email, password ) {
        debugger
        const j = await axios.get(`https://quiet-wildwood-41923.herokuapp.com/http://atc2021.bfg-e.tech/api/checkUser?email=${email}&parola=${password}`)
        debugger
    },
    async logout() {
        return await axios.delete(`/api/login`);
    }
}
