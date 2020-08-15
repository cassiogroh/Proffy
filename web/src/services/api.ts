import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/',
})

// https://proffy-api-server.herokuapp.com/
// http://localhost:3000/

export default api;