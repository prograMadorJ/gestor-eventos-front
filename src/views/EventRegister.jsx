import { connect } from 'react-redux';
import RegisterForm from "../components/event-register/RegisterForm";
import DataTableList from "../components/event-register/DataTableList";
import { useDispatch } from "react-redux";
import {
  deleteEventError,
  deleteEventRequest, deleteEventSuccess,
  finallyEventRegister,
  getEventError,
  getEventNotFound,
  getEventRequest,
  getEventSuccess,
  initialEventState,
  postEventError,
  postEventRequest,
  postEventSuccess, putEventError, putEventRequest, putEventSuccess
} from "../store/actions/event-register-actions";
import {Button} from "react-bootstrap";
import {useEffect, useState} from "react";
import {setTitleHeaderApp} from "../store/actions/app-actions";
import service from "../services/EventRegisterService";
import userService from "../services/UserRegisterService";
import {getUserError, getUserNotFound, getUserRequest, getUserSuccess} from "../store/actions/user-register-actions";
import {authLogoutSuccess} from "../store/actions/auth-actions";

function EventRegister(props) {
  
  const [isNewEvent, setIsNewEvent] = useState(false)
  const [isEditEvent, setIsEditEvent] = useState(false)
  const [editEventData, setEditEventData] = useState({})
  
  const dispatch = useDispatch();
  const {eventRegisterState, userRegisterState, appState, authState} = props;
  
  useEffect(() => {
    dispatch(setTitleHeaderApp('Eventos'))
    fetchEvents();
  }, [])
  
  function handleRegisterEvent(data) {
    dispatch(initialEventState())
    dispatch(postEventRequest())
  
    data.user = {id: data.user}
    
    service.createEvent(data, authState.token).then(() => {
      dispatch(postEventSuccess({
        handleClose: () => {
          setIsNewEvent(false);
          dispatch(finallyEventRegister())
          fetchEvents()
        }
      }))
    }).catch(err => {
      checkAuthError(err)
      
      dispatch(postEventError({
        handleClose: () => {
          setIsEditEvent(false);
          dispatch(finallyEventRegister())
          fetchEvents()
        }
      }))
    })
  }
  
  function handleUpdateEvent(data) {
    dispatch(initialEventState())
    dispatch(putEventRequest())
    
    data.user = {id: data.user}
    
    service.updateEvent(data, authState.token).then(() => {
      dispatch(putEventSuccess({
        handleClose: () => {
          setIsEditEvent(false);
          dispatch(finallyEventRegister())
          fetchEvents()
        }
      }))
    }).catch(err => {
      checkAuthError(err)
      
      dispatch(putEventError({
        handleClose: () => {
          setIsEditEvent(false);
          dispatch(finallyEventRegister())
          fetchEvents()
        }
      }))
    })
  }
  
  function handleRemoveEvent(data) {
    dispatch(initialEventState())
    dispatch(deleteEventRequest())
    
    service.deleteEvent(data.id, authState.token).then(() => {
      dispatch(deleteEventSuccess())
      fetchEvents()
    }).catch(err => {
      checkAuthError(err)
      
      dispatch(deleteEventError())
    })
  }
  
  function fetchEvents() {
    dispatch(getEventRequest())
    
    service.getAllEvents(authState.token).then(result => {
      dispatch(getEventSuccess({
        data: result.data.content
      }))
    }).catch(err => {
      if(err.response.status === 404) return dispatch(getEventNotFound())
      checkAuthError(err)
      
      dispatch(getEventError())
    });
  }
  
  function fetchUsers() {
    dispatch(getUserRequest())
    
    userService.getAllUsers(authState.token).then(result => {
      dispatch(getUserSuccess({
        data: result.data.content
      }))
    }).catch(err => {
      if(err.response.status === 404) return dispatch(getUserNotFound())
      checkAuthError(err)
      
      dispatch(getUserError())
    });
  }
  
  function handleEditEvent (data) {
    fetchUsers()
    data.user = data.user ? data.user.id : null
    setEditEventData(data)
    setIsEditEvent(true)
  }
  
  function handleDeleteEvent (data) {
    handleRemoveEvent(data)
  }
  
  const handleClickNewEvent = () => {
    fetchUsers()
    setIsNewEvent(true)
  }
  
  const handleCancelNewEvent = () => {
    setIsNewEvent(false)
  }
  
  const handleCancelEditEvent = () => {
    setIsEditEvent(false)
  }
  
  function checkAuthError(err) {
    if(err.response && err.response.status === 403)
      dispatch(authLogoutSuccess())
  }
  
  return (
    <div className="event-register">
      <div className="d-flex align-items-center mb-4">
        <h4 className="mr-2">{appState.headerTitle} </h4>
        {isNewEvent && <h6> /&nbsp;  Cadastrar</h6>}
        {isEditEvent && <h6> /&nbsp;  Editar</h6>}
        {!isEditEvent && !isNewEvent && <h6> /&nbsp; Lista</h6>}
      </div>
  
      {(!isNewEvent && !isEditEvent)  && <div className="event-register-top-panel my-4">
        <Button variant="success" onClick={handleClickNewEvent} size="sm" className="px-3">
          Novo
        </Button>
      </div>}
  
      {isNewEvent &&
      <RegisterForm options={{
        handleSubmit: handleRegisterEvent,
        handleCancel: handleCancelNewEvent,
        modal: eventRegisterState.modal,
        users: userRegisterState.data
      }} />
      }
  
      {isEditEvent &&
      <RegisterForm options={{
        handleSubmit: handleUpdateEvent,
        handleCancel: handleCancelEditEvent,
        modal: eventRegisterState.modal,
        editData: editEventData,
        users: userRegisterState.data
      }} /> }
  
      {!isNewEvent && !isEditEvent &&
      <DataTableList data={eventRegisterState.data} actions={{
        handleEdit: handleEditEvent,
        handleDelete: handleDeleteEvent
      }} />}
    
    </div>
  )
}

const mapStateToProps = store => ({
  eventRegisterState: store.eventRegisterReducer,
  userRegisterState: store.userRegisterReducer,
  appState: store.appReducer,
  authState: store.authReducer
});

export default connect(mapStateToProps)(EventRegister);
