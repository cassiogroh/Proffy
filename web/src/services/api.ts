import axios from 'axios';

const api = axios.create({
    baseURL: 'https://proffy-api-server.herokuapp.com/',
})

// https://proffy-api-server.herokuapp.com/
// http://localhost:3333/

export default api;