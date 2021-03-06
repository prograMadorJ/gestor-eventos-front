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
      handleClose: payload && payload.handleClose
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
      handleClose: payload && payload.handleClose
    }
  }
}

function postUserConfictReducer(payload) {
  return {
    status: 3,
    modal: {
      status: 3,
      title: 'Atenção',
      message: 'Não foi possível conluir a operação pois o usuário já exsite cadastrado.',
      showSpinner: false,
      handleClose: payload && payload.handleClose
    }
  }
}


function putUserRequestReducer() {
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

function putUserSuccessReducer(payload) {
  return {
    status: 2,
    modal: {
      status: 2,
      title: 'Atualizado',
      message: 'Usuário foi atualizado com sucesso!',
      showSpinner: false,
      handleClose: payload && payload.handleClose
    }
  }
}

function putUserErrorReducer(payload) {
  return {
    status: 3,
    modal: {
      status: 3,
      title: 'Erro',
      message: 'Não foi possível completar a solicitação, tente novamente.',
      showSpinner: false,
      handleClose: payload && payload.handleClose
    }
  }
}

function putUserConfictReducer(payload) {
  return {
    status: 3,
    modal: {
      status: 3,
      title: 'Atenção',
      message: 'Não foi possível conluir a operação pois o e-mail a ser atualizado já exsite cadastrado para outro usuário.',
      showSpinner: false,
      handleClose: payload && payload.handleClose
    }
  }
}



function deleteUserRequestReducer() {
  return {
    status: 1
  }
}

function deleteUserSuccessReducer(payload) {
  return {
    status: 0
  }
}

function deleteUserErrorReducer(payload) {
  return {
    status: 3
  }
}


function getUserRequestReducer() {
  return {
    status: 1
  }
}

function getUserSuccessReducer(payload) {
  return {
    status: 0,
    data: payload.data
  }
}

function getUserErrorReducer(payload) {
  return {
    status: 3
  }
}

function getUserNotFoundReducer(payload) {
  return {
    status: 4,
  }
}

function getUserHasEventReducer(payload) {
  return {
    status: 4,
    modal: {
      status: 4,
      title: 'Atenção',
      message: 'Este usuário possui eventos associados, e não poderá ser excluído. Remova todos os eventos associados para poder exlcuír o usuário.',
      showSpinner: false,
      handleClose: payload && payload.handleClose
    }
  }
}


export const userRegisterReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INITIAL_USER_STATE:
      return {...initialState}
    case types.FINALLY_USER_REGISTER:
      return {...state, ...finallyRegister(action.payload)}
    case types.POST_USER_REQUEST:
      return {...state, ...postUserRequestReducer(action.payload)}
    case types.POST_USER_SUCCESS:
      return {...state, ...postUserSuccessReducer(action.payload)}
    case types.POST_USER_ERROR:
      return {...state, ...postUserErrorReducer(action.payload)}
    case types.POST_USER_CONFLICT:
      return {...state, ...postUserConfictReducer(action.payload)}
    case types.PUT_USER_ERROR:
      return {...state, ...putUserErrorReducer(action.payload)}
    case types.PUT_USER_REQUEST:
      return {...state, ...putUserRequestReducer(action.payload)}
    case types.PUT_USER_SUCCESS:
      return {...state, ...putUserSuccessReducer(action.payload)}
    case types.PUT_USER_CONFLICT:
      return {...state, ...putUserConfictReducer(action.payload)}
    case types.DELETE_USER_ERROR:
      return {...state, ...deleteUserErrorReducer(action.payload)}
    case types.DELETE_USER_REQUEST:
      return {...state, ...deleteUserRequestReducer(action.payload)}
    case types.DELETE_USER_SUCCESS:
      return {...state, ...deleteUserSuccessReducer(action.payload)}
    case types.GET_USER_REQUEST:
      return {...state, ...getUserRequestReducer(action.payload)}
    case types.GET_USER_SUCCESS:
      return {...state, ...getUserSuccessReducer(action.payload)}
    case types.GET_USER_ERROR:
      return {...state, ...getUserErrorReducer(action.payload)}
    case types.GET_USER_NOT_FOUND:
      return {...state, ...getUserNotFoundReducer(action.payload)}
    case types.GET_USER_HAS_EVENTS:
      return {...state, ...getUserHasEventReducer(action.payload)}
    default:
      return state;
  }
};
