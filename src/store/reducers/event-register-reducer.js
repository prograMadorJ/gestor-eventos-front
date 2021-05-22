import {
  INITIAL_EVENT_STATE,
  FINALLY_EVENT_REGISTER,
  POST_EVENT_REQUEST,
  POST_EVENT_SUCCESS,
  POST_EVENT_ERROR
} from "../actions";

const initialState = {
  data: [],
  status: 0,
  modal: {
    status: 0,
    type: '',
    title: '',
    message: '',
    showSpinner: false,
    handleClose: undefined
  }
};

function finallyRegister() {
  return {
    status: 0,
    modal: {
      status: 0,
      type: '',
      title: '',
      message: '',
      showSpinner: false,
      handleClose: undefined
    }
  }
}

function postEventRequestReducer() {
  return {
    status: 1,
    modal: {
      status: 1,
      title: 'Salvando',
      message: 'Aguarde...',
      showSpinner: true
    }
  }
}

function postEventSuccessReducer(payload) {
  return {
    status: 2,
    modal: {
      status: 2,
      title: 'Salvo',
      message: 'Evento criado com sucesso!',
      showSpinner: false,
      handleClose: payload.handleClose
    }
  }
}

function postEventErrorReducer(payload) {
  return {
    status: 3,
    modal: {
      status: 3,
      title: 'Erro',
      message: 'Não foi possível completar a solicitação, tente novamente.',
      showSpinner: false,
      handleClose: payload.handleClose
    }
  }
}


export const eventRegisterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIAL_EVENT_STATE:
      return {...initialState}
    case FINALLY_EVENT_REGISTER:
      return {...state, ...finallyRegister(action.payload)}
    case POST_EVENT_REQUEST:
      return {...state, ...postEventRequestReducer(action.payload)}
    case POST_EVENT_SUCCESS:
      return {...state, ...postEventSuccessReducer(action.payload)}
    case POST_EVENT_ERROR:
      return {...state, ...postEventErrorReducer(action.payload)}
    default:
      return state;
  }
};
