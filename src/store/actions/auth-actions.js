import {
  AUTH_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT_SUCCESS,
  AUTH_ERROR,
} from "./index";

const createAction = (type, payload) => ({
  type,
  payload
})

export const authRequest = payload => createAction(AUTH_REQUEST, payload)
export const authLoginSuccess = payload => createAction(AUTH_LOGIN_SUCCESS, payload)
export const authLogoutSuccess = payload => createAction(AUTH_LOGOUT_SUCCESS, payload)
export const authError = payload => createAction(AUTH_ERROR, payload)

