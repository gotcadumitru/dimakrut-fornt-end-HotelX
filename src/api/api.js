// import * as axios from 'axios';

import axios from "axios"

export const ApartamentsAPI = {
    async getApartments( numberOfApatments = 6) {
        let response = await axios.get(`https://quiet-wildwood-41923.herokuapp.com/http://atc2021.bfg-e.tech/count=${numberOfApatments}`)
        return response.data
    },
}

export const authAPI = {
    async me() {
        // axios.get(`https://quiet-wildwood-41923.herokuapp.com/http://atc2021.bfg-e.tech/api/rooms/avable/all`).then(response =>{
        //     debugger
        //    console.log(response)
        //    return response
        // }).catch(err=>{
        //     debugger
        //     console.log(err)
            
        // })

            
        return 0;
    },
    async register(email, password,  nume,prenume ) {
        debugger
        return await axios.post(`https://quiet-wildwood-41923.herokuapp.com/http://atc2021.bfg-e.tech/api/register/`,{ email:email, parola:password,  nume:nume,prenume:prenume });
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
