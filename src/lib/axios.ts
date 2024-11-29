import axios from "axios";

export const api = axios.create({
    baseURL: 'https://swiss-bank-backend.onrender.com/api'
});
