import api from './index'


const AuthService = () => ({
  authentication(data)  {
    return api.post('/auth', data)
  }
})

export default AuthService();

