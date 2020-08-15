import axios from 'axios';

const api = axios.create({
    baseURL: 'https://proffy-api-server.herokuapp.com/',
})

export default api;