import {
  AUTH_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT_SUCCESS,
  AUTH_ERROR
} from "../actions";

const initialState = {
  status: 0,
  token: '',
  isAuthenticated: false,
  user: {
    id: null,
    name: '',
    email: ''
  }
};

function authRequestReducer() {
  return {
    status: 1
  }
}

function authLoginSuccessReducer(payload) {
  return {
    status: 2,
    isAuthenticated: true,
    token: payload.token,
    user: payload.user
  }
}

function authLogoutSuccessReducer() {
  return initialState;
}

function authErrorReducer(payload) {
  return {
    status: 3,
    token: '',
    isAuthenticated: false,
    httpStatus: payload && payload.httpStatus
  }
}



export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_REQUEST:
      return {...state, ...authRequestReducer(action.payload)}
    case AUTH_LOGIN_SUCCESS:
      return {...state, ...authLoginSuccessReducer(action.payload)}
    case AUTH_LOGOUT_SUCCESS:
      return {...state, ...authLogoutSuccessReducer(action.payload)}
    case AUTH_ERROR:
      return {...state, ...authErrorReducer(action.payload)}
    default:
      return state;
  }
};
