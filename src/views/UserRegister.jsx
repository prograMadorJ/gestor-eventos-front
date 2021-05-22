import { connect } from 'react-redux';
import RegisterForm from "../components/user-register/RegisterForm";
import { useDispatch } from "react-redux";
import {initialUserState, postUserRequest, postUserSuccess} from "../store/actions/user-register-actions";
import {sleep} from "../utils/simulations";

function UserRegister(props) {
  
  const dispatch = useDispatch();
  const {userRegisterState } = props;
  
  async function postUserData(data) {
    if(userRegisterState.status === 0) {
      dispatch(postUserRequest())
      await sleep(1000);
      dispatch(postUserSuccess({
          handleClose: () => dispatch(initialUserState())
        }))
    }
  }
 
  return (
    <div className="user-register">
      <RegisterForm options={{ handleSubmit: postUserData, modal: props.userRegisterState.modal }} />
    </div>
  )
}


const mapStateToProps = store => ({
  userRegisterState: store.userRegisterReducers
});

export default connect(mapStateToProps)(UserRegister);
