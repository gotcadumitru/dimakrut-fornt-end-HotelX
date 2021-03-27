// import * as axios from 'axios';

import axios from "axios"

export const ApartamentsAPI = {
    async getApartments( numberOfApatments = 6) {
        let response = await axios.get(`'LINKUL COMPLET DE SCTIS AICI TREBUIE'/count=${numberOfApatments}`)
        return response.data
    },
}

export const authAPI = {
    async me() {
        axios.get(`http://atc2021.bfg-e.tech/api/rooms/avable/all`).then(response =>{
            debugger
           console.log(response)
           return response
        }).catch(err=>{
            debugger
            console.log(err)
            
        })
        axios.get(`/api/rooms/avable/all`).then(response =>{
            debugger
           console.log(response)
           return response
        }).catch(err=>{
            debugger
            console.log(err)
            
        })
        axios.get(`api/rooms/avable/all`).then(response =>{
            debugger
           console.log(response)
           return response
        }).catch(err=>{
            debugger
            console.log(err)
            
        })
            
        return 0;
    },
    // async register(email, password, numeleAndPrenumele ) {
    //     debugger
    //     return await axios.post(`"LINKUL"/api/register/`,{ email:email, password:password, numeleAndPrenumele:numeleAndPrenumele });
    // },
    async login(email, password ) {
        debugger
        const j = await axios.get(`http://atc2021.bfg-e.tech/api/login?email=${email}&parola=${password}`)
        debugger
    },
    async logout() {
        return await axios.delete(`/api/login`);
    }
}
