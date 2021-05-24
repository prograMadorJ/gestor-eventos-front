import api from './index'


const UserRegisterService = () => ({
  createUser(data)  {
    return api.post('/users', data)
  },
  
  updateUser(data) {
    return api.put('/users', data)
  },
  
  deleteUser(id) {
    return api.delete(`/users/${id}`)
  },
  
  getUser(id) {
    return api.get(`/users/${id}`)
  },
  
  getAllUsers()  {
    return api.get(`/users/`)
  }
})

export default UserRegisterService();

