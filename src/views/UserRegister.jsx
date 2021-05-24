import { connect } from 'react-redux';
import RegisterForm from "../components/user-register/RegisterForm";
import DataTableList from "../components/user-register/DataTableList";
import { useDispatch } from "react-redux";
import {
  deleteUserError,
  deleteUserRequest, deleteUserSuccess,
  finallyUserRegister,
  getUserError, getUserHasEvents,
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
import eventService from "../services/EventRegisterService";
import ModalMessage from "../components/modal/ModalMessage";

function UserRegister(props) {
  
  const [isNewUser, setIsNewUser] = useState(false)
  const [isEditUser, setIsEditUser] = useState(false)
  const [editUserData, setEditUserData] = useState({})
  
  const dispatch = useDispatch();
  const {userRegisterState, appState } = props;
  
  useEffect(() => {
    dispatch(setTitleHeaderApp('Usuários'))
    fetchUsers();
  }, [])
  
  
  function handleRegisterUser(data) {
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
  
  function handleUpdateUser(data) {
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
  
  function handleRemoveUser(data) {
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
  
  function handleEditUser (data) {
    setEditUserData(data)
    setIsEditUser(true)
  }
  
  function handleDeleteUser (data) {
    findHasNoEvents(data)
      .then(() => {
        dispatch(getUserHasEvents({
          handleClose: () => {
            dispatch(finallyUserRegister())
          }
        }))
      }).catch(err => {
      if (err.response && err.response.data.content === null) {
        handleRemoveUser(data)
      } else {
        dispatch(deleteUserError())
      }
    })
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
  
  async function findHasNoEvents(user) {
    const id = user ? user.id : null
    const result = await eventService.getEventByUserId(id)
    return result && result.data && result.data.content === null
  }
  
  return (
    <div className="user-register">
      <div className="d-flex align-items-center mb-4">
        <h4 className="mr-2">{appState.headerTitle}</h4>
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
      }} />}
      
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
  appState: store.appReducer
});

export default connect(mapStateToProps)(UserRegister);
