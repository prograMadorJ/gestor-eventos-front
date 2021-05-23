import {connect, useDispatch} from "react-redux";
import { useHistory } from 'react-router-dom'
import LoginForm from "../components/auth/LoginForm";
import {authRequest, authLoginSuccess, authLogoutSuccess} from "../store/actions/auth-actions";
import {sleep} from "../utils/simulations";
import PropTypes from 'prop-types';
import {useEffect} from "react";


function Auth(props) {
  
  const dispatch = useDispatch()
  const router = useHistory()
  const {authState, isLogout} = props
  
  useEffect(() => {
    if (isLogout) logout()
  }, [isLogout])
  
  async function login() {
    dispatch(authRequest())
    await sleep(800)
    dispatch(authLoginSuccess({
      token: '123',
      user: {id: 1, name: 'Teste', email: 'teste@teste.com'}
    }))
    router.push('/')
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
