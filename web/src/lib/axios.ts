import axios from "axios";

export const api = axios.create({
  baseURL: 'https://nlw-11-setup-server-production.up.railway.app'
})