import axios from 'axios';

const api = axios.create({
    baseURL: 'https://dropsalvabackend.herokuapp.com'
})

export default api;