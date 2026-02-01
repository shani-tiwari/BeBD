import axios from 'axios';

 const api = axios.create({
    baseURL: 'https://bebd.vercel.app/api/v1',
    withCredentials: true
});

export default api;