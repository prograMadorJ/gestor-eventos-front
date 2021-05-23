import { connect } from 'react-redux';
import RegisterForm from "../components/user-register/RegisterForm";
import DataTableList from "../components/user-register/DataTableList";
import { useDispatch } from "react-redux";
import {
  finallyUserRegister,
  postUserRequest,
  postUserSuccess
} from "../store/actions/user-register-actions";
import {sleep} from "../utils/simulations";
import {Button} from "react-bootstrap";
import {useEffect, useState} from "react";
import {setTitleHeaderApp} from "../store/actions/app-actions";

function UserRegister(props) {
  
  const [isNewUser, setIsNewUser] = useState(false)
  
  const dispatch = useDispatch();
  const {userRegisterState } = props;
  
  useEffect(() => {
    dispatch(setTitleHeaderApp('Usuários'))
  }, [dispatch])
  
  async function registerUser(data) {
    if(userRegisterState.status === 0) {
      dispatch(postUserRequest())
      await sleep(1000);
      dispatch(postUserSuccess({
        handleClose: () => {
          setIsNewUser(false);
          dispatch(finallyUserRegister())
        }
      }))
    }
  }
  
  const handleClickNewUser = () => {
    setIsNewUser(true)
  }
  
  const handleCancelNewUser = () => {
    setIsNewUser(false)
  }
  
  return (
    <div className="user-register">
      <div className="d-flex align-items-center mb-4">
        <h4 className="mr-2">{props.appState.headerTitle}</h4>
        {isNewUser ? <h6> /&nbsp;  Cadastrar</h6> : <h6> /&nbsp; Lista</h6>}
      </div>
     
      {!isNewUser && <div className="user-register-top-panel my-4">
        <Button variant="success" onClick={handleClickNewUser} size="sm" className="px-3">
          Novo
        </Button>
      </div>}
      
      {isNewUser
        ? <RegisterForm options={{ handleSubmit: registerUser, handleCancel: handleCancelNewUser, modal: props.userRegisterState.modal }} />
        : <DataTableList data={userRegisterState.data} />
      }
    
    </div>
  )
}

const mapStateToProps = store => ({
  userRegisterState: store.userRegisterReducer,
  appState: store.appReducer
});

export default connect(mapStateToProps)(UserRegister);
