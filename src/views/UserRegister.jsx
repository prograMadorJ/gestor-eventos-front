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
import {useState} from "react";

function UserRegister(props) {
  
  const [isNewUser, setIsNewUser] = useState(false)
  
  const dispatch = useDispatch();
  const {userRegisterState } = props;
  
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
      {!isNewUser && <div className="user-register-top-panel mb-4">
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
  userRegisterState: store.userRegisterReducers
});

export default connect(mapStateToProps)(UserRegister);
