// import * as axios from 'axios';

import axios from "axios"


const instance = axios.create({
    baseURL: "/",
})


export const authAPI = {

    async getUserData(email,password) {
        const resp = await instance.get(`api/getUserData/?email=${email}&parola=${password}`)
            
        return resp;
    },

    async register(email, password,  nume,prenume ) {

        const resp = await instance.get(`api/register/?email=${email}&parola=${password}&nume=${nume}&prenume=${prenume}`);
        return resp
    },

    async login(email, password ) {

        const resp = await instance.get(`api/checkUser?email=${email}&parola=${password}`)

        return resp.data;

    },
}
export const roomAPI = {

    async getRooms(sect,number) {

        const resp = await instance.get(`api/rooms/data/all?section=${sect}&number=${number}`);
        return resp.data;

    },
    async getAllRoomsAPI() {

        const resp = await instance.get(`api/rooms/data/all`);
        return resp.data;

    },
    
    async getRoomsToClean(sect,number) {


        const resp = await instance.get(`api/rooms/data/all?section=${sect}&number=${number}`);
        return resp.data;

    },

    async getOneRoom(roomId) {

        const resp = await instance.get(`api/rooms/data/${roomId}`);
       
        return resp.data;

    },
    async userRentRoom(email,password,startDay,endDay,userId,roomId) {
        
        const resp = await instance.get(`api/rooms/rent?start_day=${startDay}&end_day=${endDay}&room_id=${roomId}&email=${email}&parola=${password}`);
       
        return resp;

    },
    async changeDoorStatus(roomId,newDoorStatus,email,password) {
        
        const resp = await instance.get(`api/doorStatus/?email=${email}&parola=${password}&room_id=${roomId}&status=${newDoorStatus}`);
       
        return resp.data;

    },
    async userCheckIn(email,password,roomId) {
        
        const resp = await instance.get(`api/checkIn/?email=${email}&parola=${password}&room_id=${roomId}`);
    
        return resp.data;

    },
    async userCheckOut(email,password,roomId) {
        
        const resp = await instance.get(`api/checkOut/?email=${email}&parola=${password}&room_id=${roomId}`);
    
        return resp.data;

    },
    async cleanRoom(email,password,roomId,endDate) {
        
        const resp = await instance.get(`api/cleaned/?email=${email}&parola=${password}&room_id=${roomId}&time=${ endDate + 1}`);
    
        return resp.data;

    },
    async changeMaxNumberOfGuestAPI(email,password,roomId,newGuestNumber) {
        
        const resp = await instance.get(`api/changeMaxPersNumber/${roomId}?email=${email}&parola=${password}&newVal=${Number(newGuestNumber)}`);
    
        return resp.data;
    },
    async changePricePerNightAPI(email,password,roomId,newPrice) {
        
        const resp = await instance.get(`api/changePrice/?email=${email}&parola=${password}&pret=${newPrice}&room_id=${roomId}`);
    
        return resp.data;
    },
    async changeNewFacilitatiAPI(email,password,roomId,facilit) {
        
        const resp = await instance.get(`api/changeFacilities/?email=${email}&parola=${password}&facilitati=${facilit}&room_id=${roomId}`);
    
        return resp.data;
    },
    async addNewRoomAPI(email,password,pret,clasa,nr_max_pers,poza1,poza2,poza3,poza4,facilitati) {
        
        const resp = await instance.get(`api/addRoom/?email=${email}&parola=${password}&pret=${pret}&clasa=${clasa}&nr_max_pers=${nr_max_pers}&poza1=${poza1}&poza2=${poza2}&poza3=${poza3}&poza4=${poza4}&facilitati="${facilitati}"`);
    
        return resp.data;
    },
    async deleteRoomAPI(email,password,roomID) {
        
        const resp = await instance.get(`api/removeRoom?email=${email}&parola=${password}&room_id=${roomID}`);
    
        return resp.data;
    },
    async cancelRentAPI(email,password,roomID) {
        
        const resp = await instance.get(`api/rooms/cancelRent?email=${email}&parola=${password}&room_id=${roomID}`);
    
        return resp.data;
    },
    async sendEmail(email,password,emailText) {
        
        const resp = await axios.get(`https://quiet-wildwood-41923.herokuapp.com/http://cucubau.bfg-e.tech/api/sendMail?email=${email}&parola=${password}&mesaj=${emailText.content}&subiect=${emailText.subject}`);
    
        return resp.data;
    },
}
