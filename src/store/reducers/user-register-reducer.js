import {
  INITIAL_USER_STATE,
  FINALLY_USER_REGISTER,
  POST_USER_REQUEST,
  POST_USER_SUCCESS,
  POST_USER_ERROR
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

function postUserRequestReducer() {
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

function postUserSuccessReducer(payload) {
  return {
    status: 2,
    modal: {
      status: 2,
      title: 'Salvo',
      message: 'Usuário foi salvo com sucesso!',
      showSpinner: false,
      handleClose: payload.handleClose
    }
  }
}

function postUserErrorReducer(payload) {
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


export const userRegisterReducers = (state = initialState, action) => {
  switch (action.type) {
    case INITIAL_USER_STATE:
      return {...initialState}
    case FINALLY_USER_REGISTER:
      return {...state, ...finallyRegister(action.payload)}
    case POST_USER_REQUEST:
      return {...state, ...postUserRequestReducer(action.payload)}
    case POST_USER_SUCCESS:
      return {...state, ...postUserSuccessReducer(action.payload)}
    case POST_USER_ERROR:
      return {...state, ...postUserErrorReducer(action.payload)}
    default:
      return state;
  }
};
