import * as axios from 'axios';

export const ApartamentsAPI = {
    async getApartments( numberOfApatments = 6) {
        let response = await axios.get(`'LINKUL COMPLET DE SCTIS AICI TREBUIE'/count=${numberOfApatments}`)
        return response.data
    },
}

export const authAPI = {
    async me() {
        debugger
        let response = await axios.get(`api/auth/me`,)
            debugger
        return response;
    },
    async register(email, password, numeleAndPrenumele ) {
        debugger
        return await axios.post(`"LINKUL"/api/register/`,{ email:email, password:password, numeleAndPrenumele:numeleAndPrenumele });
    },
    async login(email, password ) {
        debugger
        return await axios.post(`"LINKUL"/api/login/`,{ email:email, password:password });
    },
    async logout() {
        return await axios.delete(`/api/login`);
    }
}
