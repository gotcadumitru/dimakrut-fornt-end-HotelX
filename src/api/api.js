// import * as axios from 'axios';

import axios from "axios"

export const authAPI = {

    async getUserData(email,password) {
        const resp = await axios.get(`/api/getUserData/?email=${email}&parola=${password}`)
            
        return resp;
    },

    async register(email, password,  nume,prenume ) {

        const resp = await axios.get(`/api/register/?email=${email}&parola=${password}&nume=${nume}&prenume=${prenume}`);
        return resp
    },

    async login(email, password ) {

        const resp = await axios.get(`/api/checkUser?email=${email}&parola=${password}`)

        return resp.data;

    },
}
export const roomAPI = {

    async getRooms(sect,number) {

        const resp = await axios.get(`/api/rooms/data/all?section=${sect}&number=${number}`);
        return resp.data;

    },
    async getAllRoomsAPI() {

        const resp = await axios.get(`/api/rooms/data/all`);
        return resp.data;

    },
    
    async getRoomsToClean(sect,number) {


        const resp = await axios.get(`/api/rooms/data/all?section=${sect}&number=${number}`);
        return resp.data;

    },

    async getOneRoom(roomId) {

        const resp = await axios.get(`/api/rooms/data/${roomId}`);
       
        return resp.data;

    },
    async userRentRoom(email,password,startDay,endDay,userId,roomId) {
        const resp = await axios.get(`/api/rooms/rent?start_day=${startDay}&end_day=${endDay}&room_id=${roomId}&email=${email}&parola=${password}`);
       
        return resp;

    },
    async changeRoomstatus(roomId,newDoorStatus,email,password,) {

        const resp = await axios.get(`/api/handleDoorStatus/?email=${email}&parola=${password}&roomId=${roomId}&newStatus=${newDoorStatus}`);
       
        return resp.data;

    },
}
