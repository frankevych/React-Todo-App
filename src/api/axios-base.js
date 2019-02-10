import axios from 'axios';

const baseURL = `https://jsonplaceholder.typicode.com`;

const axiosInstance = axios.create({
    baseURL: baseURL
});

export default axiosInstance