import axios from 'axios';

const api = axios.create({
    baseURL: 'https://rocketboxjm.herokuapp.com'
});

export default api;
