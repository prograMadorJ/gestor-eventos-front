import { connect } from 'react-redux';
import RegisterForm from "../components/user-register/RegisterForm";
import DataTableList from "../components/user-register/DataTableList";
import { useDispatch } from "react-redux";
import * as act from "../store/actions/user-register-actions";
import {Button} from "react-bootstrap";
import {useEffect, useState} from "react";
import {setTitleHeaderApp} from "../store/actions/app-actions";
import service from "../services/UserRegisterService";
import ModalMessage from "../components/modal/ModalMessage";
import {authLogoutSuccess} from "../store/actions/auth-actions";

function UserRegister(props) {
  
  const [isNewUser, setIsNewUser] = useState(false)
  const [isEditUser, setIsEditUser] = useState(false)
  const [editUserData, setEditUserData] = useState({})
  
  const dispatch = useDispatch();
  const {userRegisterState, appState, authState } = props;
  
  useEffect(() => {
    dispatch(setTitleHeaderApp('Usuários'))
    fetchUsers();
  }, [])
  
  
  function handleRegisterUser(data) {
    dispatch(act.initialUserState())
    dispatch(act.postUserRequest())
    
    service.createUser(data, authState.token).then(() => {
      dispatch(act.postUserSuccess({
        handleClose: () => {
          setIsNewUser(false);
          dispatch(act.finallyUserRegister())
          fetchUsers()
        }
      }))
    }).catch(err => {
      if(err && err.response && err.response.status === 409)
        dispatch(act.postUserConflict({
          handleClose: () => {
            dispatch(act.finallyUserRegister())
          }
        }))
      else {
        dispatch(act.postUserError({
          handleClose: () => {
            dispatch(act.finallyUserRegister())
          }
        }))
      }
      checkAuthError(err)
    })
  }
  
  function handleUpdateUser(data) {
    dispatch(act.initialUserState())
    dispatch(act.putUserRequest())
    
    service.updateUser(data, authState.token).then(() => {
      dispatch(act.putUserSuccess({
        handleClose: () => {
          setIsEditUser(false);
          dispatch(act.finallyUserRegister())
          fetchUsers()
        }
      }))
    }).catch(err => {
      if(err && err.response
        && err.response.status === 409)
        dispatch(act.putUserConflict({
          handleClose: () => {
            dispatch(act.finallyUserRegister())
            fetchUsers()
          }
        }))
      else
        dispatch(act.putUserError({
          handleClose: () => {
            dispatch(act.finallyUserRegister())
          }
        }))
      checkAuthError(err)
    })
  }
  
  function handleDeleteUser(data) {
    dispatch(act.initialUserState())
    dispatch(act.deleteUserRequest())
    
    service.deleteUser(data.id, authState.token).then(() => {
      dispatch(act.deleteUserSuccess())
      fetchUsers()
    }).catch(err => {
      if(err && err.response
        && err.response.status === 422
        && err.response.data.message === 'cannot delete because has events')
        dispatch(act.getUserHasEvents({
          handleClose: () => {
            dispatch(act.finallyUserRegister())
            fetchUsers()
          }
        }))
      else
        dispatch(act.deleteUserError({
          handleClose: () => {}
        }))
      checkAuthError(err)
    })
  }
  
  function fetchUsers() {
    dispatch(act.getUserRequest())
    
    service.getAllUsers(authState.token).then(result => {
      dispatch(act.getUserSuccess({
        data: result.data.content
      }))
    }).catch(err => {
      if(err && err.response.status === 404) return dispatch(act.getUserNotFound())
      checkAuthError(err)
      dispatch(act.getUserError(({
        handleClose: () => {}
      })))
    });
  }
  
  function handleEditUser (data) {
    setEditUserData(data)
    setIsEditUser(true)
  }
  
  
  const handleClickNewUser = () => {
    setIsNewUser(true)
  }
  
  const handleCancelNewUser = () => {
    setIsNewUser(false)
    fetchUsers()
  }
  
  const handleCancelEditUser = () => {
    setIsEditUser(false)
    fetchUsers()
  }
  
  function checkAuthError(err) {
    if(err && err.response && err.response.status === 403)
      dispatch(authLogoutSuccess())
  }
  
  return (
    <div className="user-register">
      <div className="d-flex align-items-center mb-4">
        <h4 className="mr-2">{appState.headerTitle}</h4>
        {isNewUser && <h6> /&nbsp;  Cadastrar</h6>}
        {isEditUser && <h6> /&nbsp;  Editar</h6>}
        {!isEditUser && !isNewUser && <h6> /&nbsp; Lista</h6>}
      </div>
      
      {(!isNewUser && !isEditUser && authState.user.admin) && <div className="user-register-top-panel my-4">
        <Button variant="success" onClick={handleClickNewUser} size="sm" className="px-3">
          Novo
        </Button>
      </div>}
      
      {isNewUser &&
      <RegisterForm options={{
        handleSubmit: handleRegisterUser,
        handleCancel: handleCancelNewUser,
        modal: userRegisterState.modal
      }} />
      }
      
      {isEditUser &&
      <RegisterForm options={{
        handleSubmit: handleUpdateUser,
        handleCancel: handleCancelEditUser,
        modal: userRegisterState.modal,
        editData: editUserData
      }} /> }
      
      {!isNewUser && !isEditUser &&
      <DataTableList data={userRegisterState.data} actions={{
        handleEdit: handleEditUser,
        handleDelete: handleDeleteUser
      }} authState={authState} />}
      
      {userRegisterState.status === 4 &&
      <ModalMessage
        status={userRegisterState.modal.status}
        title={userRegisterState.modal.title}
        message={userRegisterState.modal.message}
        showSpinner={userRegisterState.modal.showSpinner}
        handleClose={userRegisterState.modal.handleClose}
      />}
    
    </div>
  )
}

const mapStateToProps = store => ({
  userRegisterState: store.userRegisterReducer,
  appState: store.appReducer,
  authState: store.authReducer
});

export default connect(mapStateToProps)(UserRegister);
