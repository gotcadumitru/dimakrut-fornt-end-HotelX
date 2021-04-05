// import * as axios from 'axios';

import axios from "axios"

export const authAPI = {

    async getUserData(email,password) {
        const resp = await axios.get(`https://quiet-wildwood-41923.herokuapp.com/https://atc2021.bfg-e.tech/api/getUserData/?email=${email}&parola=${password}`)
            
        return resp;
    },

    async register(email, password,  nume,prenume ) {

        const resp = await axios.get(`https://quiet-wildwood-41923.herokuapp.com/https://atc2021.bfg-e.tech/api/register/?email=${email}&parola=${password}&nume=${nume}&prenume=${prenume}`);
        return resp
    },

    async login(email, password ) {

        const resp = await axios.get(`https://quiet-wildwood-41923.herokuapp.com/https://atc2021.bfg-e.tech/api/checkUser?email=${email}&parola=${password}`)

        return resp.data;

    },
}
export const roomAPI = {

    async getRooms(sect,number) {

        const resp = await axios.get(`https://quiet-wildwood-41923.herokuapp.com/https://atc2021.bfg-e.tech/api/rooms/data/all?section=${sect}&number=${number}`);
        return resp.data;

    },
    async getAllRoomsAPI() {

        const resp = await axios.get(`https://quiet-wildwood-41923.herokuapp.com/https://atc2021.bfg-e.tech/api/rooms/data/all`);
        return resp.data;

    },
    
    async getRoomsToClean(sect,number) {


        const resp = await axios.get(`https://quiet-wildwood-41923.herokuapp.com/https://atc2021.bfg-e.tech/api/rooms/data/all?section=${sect}&number=${number}`);
        return resp.data;

    },

    async getOneRoom(roomId) {

        const resp = await axios.get(`https://quiet-wildwood-41923.herokuapp.com/https://atc2021.bfg-e.tech/api/rooms/data/${roomId}`);
       
        return resp.data;

    },
    async userRentRoom(email,password,startDay,endDay,userId,roomId) {
        debugger
        const resp = await axios.get(`https://quiet-wildwood-41923.herokuapp.com/https://atc2021.bfg-e.tech/api/rooms/rent?start_day=${startDay}&end_day=${endDay}&room_id=${roomId}&email=${email}&parola=${password}`);
       
        return resp;

    },
    async changeDoorStatus(roomId,newDoorStatus,email,password) {
        debugger
        const resp = await axios.get(`https://quiet-wildwood-41923.herokuapp.com/https://atc2021.bfg-e.tech/api/doorStatus/?email=${email}&parola=${password}&room_id=${roomId}&status=${newDoorStatus}`);
       debugger
        return resp.data;

    },
    async userCheckIn(email,password,roomId) {
        debugger
        const resp = await axios.get(`https://quiet-wildwood-41923.herokuapp.com/https://atc2021.bfg-e.tech/api/checkIn/?email=${email}&parola=${password}&room_id=${roomId}`);
    debugger
        return resp.data;

    },
    async userCheckOut(email,password,roomId) {
        debugger
        const resp = await axios.get(`https://quiet-wildwood-41923.herokuapp.com/https://atc2021.bfg-e.tech/api/checkOut/?email=${email}&parola=${password}&room_id=${roomId}`);
    debugger
        return resp.data;

    },
    async cleanRoom(email,password,roomId,endDate) {
        debugger
        const resp = await axios.get(`https://quiet-wildwood-41923.herokuapp.com/https://atc2021.bfg-e.tech/api/cleaned/?email=${email}&parola=${password}&room_id=${roomId}&time=${ endDate + 1}`);
    debugger
        return resp.data;

    },
    async changeMaxNumberOfGuestAPI(email,password,roomId,newGuestNumber) {
        debugger
        const resp = await axios.get(`https://quiet-wildwood-41923.herokuapp.com/https://atc2021.bfg-e.tech/api/changeMaxPersNumber/${roomId}/?email=${email}&parola=${password}&newVal=${newGuestNumber}`);
    debugger
        return resp.data;
    },
    async changePricePerNightAPI(email,password,roomId,newPrice) {
        debugger
        const resp = await axios.get(`https://quiet-wildwood-41923.herokuapp.com/https://atc2021.bfg-e.tech/api/changePrice/${roomId}/?email=${email}&parola=${password}&newVal=${newPrice}`);
    debugger
        return resp.data;
    },
    async addNewRoomAPI(email,password,pret,clasa,nr_max_pers,poza1,poza2,poza3,poza4,facilitati) {
        debugger
        const resp = await axios.get(`https://quiet-wildwood-41923.herokuapp.com/https://atc2021.bfg-e.tech/api/addRoom/?email=${email}&parola=${password}&pret=${pret}&clasa=${clasa}&nr_max_pers=${nr_max_pers}&poza1=${poza1}&poza2=${poza2}&poza3=${poza3}&poza4=${poza4}`);
    debugger
        return resp.data;
    },
    async deleteRoomAPI(email,password,roomID) {
        debugger
        const resp = await axios.get(`https://quiet-wildwood-41923.herokuapp.com/https://atc2021.bfg-e.tech/api/deleteRoom/${roomID}/?email=${email}&parola=${password}`);
    debugger
        return resp.data;
    },
}
