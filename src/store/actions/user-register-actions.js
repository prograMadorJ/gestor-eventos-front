import {
  INITIAL_USER_STATE,
  FINALLY_USER_REGISTER,
  POST_USER_REQUEST,
  POST_USER_SUCCESS,
  POST_USER_ERROR
} from "./index";

const createAction = (type, payload) => ({
  type,
  payload
})

export const initialUserState = payload => createAction(INITIAL_USER_STATE, payload)

export const finallyUserRegister = payload => createAction(FINALLY_USER_REGISTER, payload)

export const postUserRequest = payload => createAction(POST_USER_REQUEST, payload)

export const postUserSuccess = payload => createAction(POST_USER_SUCCESS, payload)

export const postUserError = payload => createAction(POST_USER_ERROR, payload)

