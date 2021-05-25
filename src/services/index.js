import axios from "axios";

export default axios.create({
  baseURL: `http://localhost:8080/api`
});

export const jwt = accessToken => ({headers: {
    Authorization: `Bearer ${accessToken}`
  }})
