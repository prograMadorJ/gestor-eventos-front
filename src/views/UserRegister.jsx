import { connect } from 'react-redux';
import RegisterForm from "../components/user-register/RegisterForm";
import DataTableList from "../components/user-register/DataTableList";
import { useDispatch } from "react-redux";
import {
  deleteUserError,
  deleteUserRequest, deleteUserSuccess,
  finallyUserRegister,
  getUserError,
  getUserNotFound,
  getUserRequest,
  getUserSuccess,
  initialUserState,
  postUserError,
  postUserRequest,
  postUserSuccess, putUserError, putUserRequest, putUserSuccess
} from "../store/actions/user-register-actions";
import {Button} from "react-bootstrap";
import {useEffect, useState} from "react";
import {setTitleHeaderApp} from "../store/actions/app-actions";
import service from "../services/UserRegisterService";

function UserRegister(props) {
  
  const [isNewUser, setIsNewUser] = useState(false)
  const [isEditUser, setIsEditUser] = useState(false)
  const [editUserData, setEditUserData] = useState({})
  
  const dispatch = useDispatch();
  const {userRegisterState } = props;
  
  useEffect(() => {
    dispatch(setTitleHeaderApp('Usuários'))
    fetchUsers();
  }, [dispatch])
  
  
  function registerUser(data) {
    dispatch(initialUserState())
    dispatch(postUserRequest())
    
   service.createUser(data).then(() => {
      dispatch(postUserSuccess({
        handleClose: () => {
          setIsNewUser(false);
          dispatch(finallyUserRegister())
          fetchUsers()
        }
      }))
    }).catch(err => {
      dispatch(postUserError())
    })
  }
  
  function updateUser(data) {
    dispatch(initialUserState())
    dispatch(putUserRequest())
    
    service.updateUser(data).then(() => {
      dispatch(putUserSuccess({
        handleClose: () => {
          setIsEditUser(false);
          dispatch(finallyUserRegister())
          fetchUsers()
        }
      }))
    }).catch(err => {
      dispatch(putUserError())
    })
  }
  
  function removeUser(data) {
    dispatch(initialUserState())
    dispatch(deleteUserRequest())
    
    service.deleteUser(data.id).then(() => {
      dispatch(deleteUserSuccess())
      fetchUsers()
    }).catch(err => {
      dispatch(deleteUserError())
    })
  }
  
  function fetchUsers() {
    dispatch(getUserRequest())
    
    service.getAllUsers().then(result => {
      dispatch(getUserSuccess({
        data: result.data.content
      }))
    }).catch(err => {
      if(err.response.status === 404) return dispatch(getUserNotFound())
      dispatch(getUserError())
    });
  }
  
  function editUser (data) {
    setEditUserData(data)
    setIsEditUser(true)
  }
  
  function deleteUser (data) {
    removeUser(data)
  }
  
  const handleClickNewUser = () => {
    setIsNewUser(true)
  }
  
  const handleCancelNewUser = () => {
    setIsNewUser(false)
  }
  
  const handleCancelEditUser = () => {
    setIsEditUser(false)
  }
  
  return (
    <div className="user-register">
      <div className="d-flex align-items-center mb-4">
        <h4 className="mr-2">{props.appState.headerTitle}</h4>
        {isNewUser && <h6> /&nbsp;  Cadastrar</h6>}
        {isEditUser && <h6> /&nbsp;  Editar</h6>}
        {!isEditUser && !isNewUser && <h6> /&nbsp; Lista</h6>}
      </div>
      
      {(!isNewUser && !isEditUser) && <div className="user-register-top-panel my-4">
        <Button variant="success" onClick={handleClickNewUser} size="sm" className="px-3">
          Novo
        </Button>
      </div>}
      
      {isNewUser &&
        <RegisterForm options={{
          handleSubmit: registerUser,
          handleCancel: handleCancelNewUser,
          modal: props.userRegisterState.modal
        }} />
      }
  
      {isEditUser &&
      <RegisterForm options={{
        handleSubmit: updateUser,
        handleCancel: handleCancelEditUser,
        modal: props.userRegisterState.modal,
        editData: editUserData
      }} /> }
      
      {!isNewUser && !isEditUser &&
      <DataTableList data={userRegisterState.data} actions={{
        handleEdit: editUser, handleDelete: deleteUser
      }} />}
    
    </div>
  )
}

const mapStateToProps = store => ({
  userRegisterState: store.userRegisterReducer,
  appState: store.appReducer
});

export default connect(mapStateToProps)(UserRegister);
