import {
  INITIAL_USER_STATE,
  FINALLY_USER_REGISTER,
  POST_USER_REQUEST,
  POST_USER_SUCCESS,
  POST_USER_ERROR,
  PUT_USER_REQUEST,
  PUT_USER_SUCCESS,
  PUT_USER_ERROR,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_ERROR,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  GET_USER_NOT_FOUND
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

export const putUserRequest = payload => createAction(PUT_USER_REQUEST, payload)

export const putUserSuccess = payload => createAction(PUT_USER_SUCCESS, payload)

export const putUserError = payload => createAction(PUT_USER_ERROR, payload)

export const deleteUserRequest = payload => createAction(DELETE_USER_REQUEST, payload)

export const deleteUserSuccess = payload => createAction(DELETE_USER_SUCCESS, payload)

export const deleteUserError = payload => createAction(DELETE_USER_ERROR, payload)

export const getUserRequest = payload => createAction(GET_USER_REQUEST, payload)

export const getUserSuccess = payload => createAction(GET_USER_SUCCESS, payload)

export const getUserError = payload => createAction(GET_USER_ERROR, payload)

export const getUserNotFound = payload => createAction(GET_USER_NOT_FOUND, payload)

