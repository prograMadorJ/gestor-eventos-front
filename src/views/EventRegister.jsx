import { connect } from 'react-redux';
import RegisterForm from "../components/event-register/RegisterForm";
import DataTableList from "../components/event-register/DataTableList";
import { useDispatch } from "react-redux";
import {
  finallyEventRegister,
  postEventRequest,
  postEventSuccess
} from "../store/actions/event-register-actions";
import {sleep} from "../utils/simulations";
import {Button} from "react-bootstrap";
import {useEffect, useState} from "react";
import {setTitleHeaderApp} from "../store/actions/app-actions";

function EventRegister(props) {
  
  const [isNewEvent, setIsNewEvent] = useState(false)
  
  const dispatch = useDispatch();
  const {eventRegisterState } = props;
  
  useEffect(() => {
    dispatch(setTitleHeaderApp('Eventos'))
  }, [])
  
  async function registerEvent(data) {
    if(eventRegisterState.status === 0) {
      dispatch(postEventRequest())
      await sleep(1000);
      dispatch(postEventSuccess({
        handleClose: () => {
          setIsNewEvent(false);
          dispatch(finallyEventRegister())
        }
      }))
    }
  }
  
  const handleClickNewEvent = () => {
    setIsNewEvent(true)
  }
  
  const handleCancelNewEvent = () => {
    setIsNewEvent(false)
  }
  
  return (
    <div className="event-register">
      <div className="d-flex align-items-center mb-4">
        <h4 className="mr-2">{props.appState.headerTitle} </h4>
        {isNewEvent ? <h6> /&nbsp; Cadastrar</h6> : <h6> /&nbsp; Lista</h6>}
      </div>
      
      {!isNewEvent && <div className="event-register-top-panel my-4">
        <Button variant="success" onClick={handleClickNewEvent} size="sm" className="px-3">
          Novo
        </Button>
      </div>}
      
      {isNewEvent
        ? <RegisterForm options={{ handleSubmit: registerEvent, handleCancel: handleCancelNewEvent, modal: props.eventRegisterState.modal }} />
        : <DataTableList data={eventRegisterState.data} />
      }
    
    </div>
  )
}

const mapStateToProps = store => ({
  eventRegisterState: store.eventRegisterReducer,
  appState: store.appReducer
});

export default connect(mapStateToProps)(EventRegister);
