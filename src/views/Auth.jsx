import {connect, useDispatch} from "react-redux";
import { useHistory } from 'react-router-dom'
import LoginForm from "../components/auth/LoginForm";
import {authRequest, authLoginSuccess, authLogoutSuccess, authError} from "../store/actions/auth-actions";
import authService from '../services/AuthService'
import PropTypes from 'prop-types';
import {useEffect} from "react";
import {sleep} from "../utils/simulations";


function Auth(props) {
  
  const dispatch = useDispatch()
  const router = useHistory()
  const {authState, isLogout} = props
  
  useEffect(() => {
    if (isLogout) logout()
  }, [isLogout])
  
  async function login(data) {
    dispatch(authRequest())
    await sleep(1000)
    authService.authentication({username: data.email, password: data.password})
      .then((result) => {
        dispatch(authLoginSuccess({
          token: result.data.content.jwt,
          user: result.data.content.user
        }))
        router.push('/')
      }).catch(err => {
      if(err.response)
        dispatch(authError({httpStatus: err.response.status}))
      else
        dispatch(authError({httpStatus: 500}))
    })
    
  }
  
  function logout() {
    dispatch(authRequest())
    dispatch(authLogoutSuccess())
    router.push('/login')
  }
  
  return (
    <div className="login">
      <LoginForm  options={{
        handleSubmit: login,
        authState
      }} />
    </div>
  );
}

Auth.propTypes = {
  isLogout: PropTypes.bool
}

const mapStateToProps = store => ({
  authState: store.authReducer
})


export default connect(mapStateToProps)(Auth);
