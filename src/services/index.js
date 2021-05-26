import axios from "axios";

export default axios.create({
  baseURL: process.env.NODE_ENV === 'production'
    ? 'https://desafio-nkey-gestor-eventos.herokuapp.com/api'
    : `http://localhost:8080/api`
});

export const jwt = accessToken => ({headers: {
    Authorization: `Bearer ${accessToken}`
  }})
