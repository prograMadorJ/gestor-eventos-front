import * as types from "../actions";

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


function putEventRequestReducer() {
  return {
    status: 1,
    modal: {
      status: 1,
      title: 'Atualizando',
      message: 'Aguarde...',
      showSpinner: true
    }
  }
}

function putEventSuccessReducer(payload) {
  return {
    status: 2,
    modal: {
      status: 2,
      title: 'Atualizado',
      message: 'Evento foi atualizado com sucesso!',
      showSpinner: false,
      handleClose: payload.handleClose
    }
  }
}

function putEventErrorReducer(payload) {
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



function deleteEventRequestReducer() {
  return {
    status: 1
  }
}

function deleteEventSuccessReducer(payload) {
  return {
    status: 0
  }
}

function deleteEventErrorReducer(payload) {
  return {
    status: 3
  }
}


function getEventRequestReducer() {
  return {
    status: 1
  }
}

function getEventSuccessReducer(payload) {
  return {
    status: 0,
    data: payload.data
  }
}

function getEventErrorReducer(payload) {
  return {
    status: 3
  }
}

function getEventNotFoundReducer(payload) {
  return {
    status: 4,
  }
}


export const eventRegisterReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INITIAL_EVENT_STATE:
      return {...initialState}
    case types.FINALLY_EVENT_REGISTER:
      return {...state, ...finallyRegister(action.payload)}
    case types.POST_EVENT_REQUEST:
      return {...state, ...postEventRequestReducer(action.payload)}
    case types.POST_EVENT_SUCCESS:
      return {...state, ...postEventSuccessReducer(action.payload)}
    case types.POST_EVENT_ERROR:
      return {...state, ...postEventErrorReducer(action.payload)}
    case types.PUT_EVENT_ERROR:
      return {...state, ...putEventErrorReducer(action.payload)}
    case types.PUT_EVENT_REQUEST:
      return {...state, ...putEventRequestReducer(action.payload)}
    case types.PUT_EVENT_SUCCESS:
      return {...state, ...putEventSuccessReducer(action.payload)}
    case types.DELETE_EVENT_ERROR:
      return {...state, ...deleteEventErrorReducer(action.payload)}
    case types.DELETE_EVENT_REQUEST:
      return {...state, ...deleteEventRequestReducer(action.payload)}
    case types.DELETE_EVENT_SUCCESS:
      return {...state, ...deleteEventSuccessReducer(action.payload)}
    case types.GET_EVENT_REQUEST:
      return {...state, ...getEventRequestReducer(action.payload)}
    case types.GET_EVENT_SUCCESS:
      return {...state, ...getEventSuccessReducer(action.payload)}
    case types.GET_EVENT_ERROR:
      return {...state, ...getEventErrorReducer(action.payload)}
    case types.GET_EVENT_NOT_FOUND:
      return {...state, ...getEventNotFoundReducer(action.payload)}
    default:
      return state;
  }
};
