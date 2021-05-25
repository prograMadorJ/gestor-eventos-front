import api, {jwt} from './index'


const UserRegisterService = () => ({
  createUser(data, token)  {
    return api.post('/users', data, jwt(token))
  },
  
  updateUser(data, token) {
    return api.put('/users', data, jwt(token))
  },
  
  deleteUser(id, token) {
    return api.delete(`/users/${id}`, jwt(token))
  },
  
  getUser(id, token) {
    return api.get(`/users/${id}`, jwt(token))
  },
  
  getAllUsers(token)  {
    return api.get(`/users/`, jwt(token))
  }
})

export default UserRegisterService();

